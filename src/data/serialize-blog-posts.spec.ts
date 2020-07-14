import { serializeBlogPosts } from './serialize-blog-posts';
import { rawDataFixtures, dataFixtures } from './test';
import { BlogPosts } from './data.models';

describe('serializeBlogPosts', () => {
  let serializedBlogPosts: BlogPosts;

  beforeEach(() => serializedBlogPosts = serializeBlogPosts(rawDataFixtures));

  it('should serialize raw blog data entries into a properly typed blog post objects array', () => {
    expect(serializedBlogPosts)
      .toEqual(dataFixtures);
  });

  it('should pick only the first author for each blog post', () => {
    expect(serializedBlogPosts[0].author)
      .toEqual(dataFixtures[0].author);

    expect(serializedBlogPosts[1].author)
      .toEqual(dataFixtures[1].author);

    expect(serializedBlogPosts[2].author)
      .toEqual(dataFixtures[2].author);
  });

  it('should capture and format the original blog post date as a string formatted as DD MMMM YYYY', () => {
    expect(serializedBlogPosts[0].date)
      .toEqual(dataFixtures[0].date);

    expect(serializedBlogPosts[1].date)
      .toEqual(dataFixtures[1].date);

    expect(serializedBlogPosts[2].date)
      .toEqual(dataFixtures[2].date);
  });

  it('should capture the blog post image and assign it to the "imageSourceUrl" property', () => {
    expect(serializedBlogPosts[0].imageSourceUrl)
      .toEqual(dataFixtures[0].imageSourceUrl);

    expect(serializedBlogPosts[1].imageSourceUrl)
      .toEqual(dataFixtures[1].imageSourceUrl);

    expect(serializedBlogPosts[2].imageSourceUrl)
      .toEqual(dataFixtures[2].imageSourceUrl);
  });

  it('should populate the "groups" property of the serialized post with the data extracted from the "wp:term" property', () => {
    expect(serializedBlogPosts[0].groups)
      .toEqual(dataFixtures[0].groups);

    expect(serializedBlogPosts[1].groups)
      .toEqual(dataFixtures[1].groups);

    expect(serializedBlogPosts[2].groups)
      .toEqual(dataFixtures[2].groups);
  });
});
