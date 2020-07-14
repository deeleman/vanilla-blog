import { blogPostsSerializer } from './blog-posts-serializer';
import { rawDataFixtures, dataFixtures } from './test';

describe('blogPostsSerializer', () => {
  it('should serialize raw blog data entries into a properly typed blog post objects array', () => {
    const serializedBlogPosts = blogPostsSerializer(rawDataFixtures);

    expect(serializedBlogPosts)
      .toEqual(dataFixtures);
  });

  it('should pick only the first author as the main author for each blog post', () => {
    const serializedBlogPosts = blogPostsSerializer(rawDataFixtures);

    expect(serializedBlogPosts[0].author.name)
      .toBe('liam zheng');

    expect(serializedBlogPosts[1].author.name)
      .toBe('Joshua Powers');

    expect(serializedBlogPosts[2].author.name)
      .toBe('Igor Ljubuncic');
  });
});
