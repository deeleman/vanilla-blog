import { RawBlogPosts, RawBlogPost, BlogPost, BlogPosts } from './data.models';

const months = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];
const formatDate = (dateString: string): string => {
  const date = new Date(dateString);

  return [date.getUTCDate(), months[date.getUTCMonth()], date.getFullYear()].join(' ');
};

const fetchImageSourceUrl = (rawBlogPost: RawBlogPost):string => {
  try {
    return rawBlogPost._embedded['wp:featuredmedia'][0].source_url;
  } catch {
    throw new Error(`Blog post #${rawBlogPost.id}, titled as "${rawBlogPost.title.rendered}", does not feature an image.`)
  }
};

/**
 * Transforms a raw RawBlogPosts data graph object into a BlogPost instance objects array
 * @param rawBlogPosts Raw data recordset featuring blog posts (conforming to WordPress posts data schema)
 */
export const serializeBlogPosts = (rawBlogPosts: RawBlogPosts): BlogPosts => {
  return rawBlogPosts.map<BlogPost>((rawBlogPost) => ({
    id: rawBlogPost.id,
    title: rawBlogPost.title.rendered,
    link: rawBlogPost.link,
    // Given the designs provided, I assume we expect to display ONE author only per blog post card
    author: {
      name: rawBlogPost._embedded.author[0].name,
      link: rawBlogPost._embedded.author[0].link
    },
    date: formatDate(rawBlogPost.date),
    imageSourceUrl: fetchImageSourceUrl(rawBlogPost),
    groups: rawBlogPost
      ._embedded['wp:term']
      .reduce((arr, nestedArray) => [...arr, ...nestedArray], [])
      .filter((term) => term.taxonomy === 'group' || term.taxonomy === 'category')
      .map(({ name, link }) => ({ name, link })),
  }));
};
