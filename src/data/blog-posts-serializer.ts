import { RawBlogPosts, BlogPost, BlogPosts } from './data.models';

const months = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];
const formatDate = (dateString: string): string => {
  const date = new Date(dateString);

  return [date.getUTCDate(), months[date.getUTCMonth()], date.getFullYear()].join(' ');
};

/**
 * Transforms a raw RawBlogPosts data graph object into a BlogPost instance objects array
 * @param rawBlogPosts Raw data recordset featuring blog posts (conforming to WordPress posts data schema)
 */
export const blogPostsSerializer = (rawBlogPosts: RawBlogPosts): BlogPosts => {
  return rawBlogPosts.map<BlogPost>((rawBlogPost) => ({
    id: rawBlogPost.id,
    title: rawBlogPost.title.rendered,
    link: rawBlogPost.link,
    author: {
      // Given the designs provided, I assume we expect to display ONE author only per blog post card
      name: rawBlogPost._embedded.author[0]?.name,
      link: rawBlogPost._embedded.author[0]?.link
    },
    date: formatDate(rawBlogPost.date),
    imageSourceUrl: rawBlogPost._embedded['wp:featuredmedia'][0].source_url,
    groups: rawBlogPost
      ._embedded['wp:term'][3] // eslint-disable-line @typescript-eslint/no-magic-numbers
      .filter((term) => term.taxonomy === 'group')
      .map(({ name, link }) => ({ name, link })),
  }));
};
