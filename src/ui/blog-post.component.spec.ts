import { BlogPost } from '../data';
import { dataFixtures } from '../data/test';
import { BlogPostComponent } from './blog-post.component';

describe('BlogPostComponent', () => {
  const blogPostComponent = new BlogPostComponent();
  const blogPost = dataFixtures[0] as BlogPost;
  let compiledOutput: string;

  beforeEach(() => compiledOutput = blogPostComponent.compile(blogPost));
  
  it('should feature the first group of the group set in the returned HTML output', () => {
    expect(compiledOutput)
      .toContain(blogPost.groups[0].name);
  });
  
  it('should feature the blog post group as a slugified className in the returned HTML output', () => {
    expect(compiledOutput)
      .toContain('--canonical-announcements');
  });

  it('should feature a link to the post detail page in the returned HTML output', () => {
    expect(compiledOutput)
      .toContain(`href="${blogPost.link}"`);
  });

  it('should feature the blog post main image in the returned HTML output', () => {
    expect(compiledOutput)
      .toContain(`src="${blogPost.imageSourceUrl}"`);

    expect(compiledOutput)
      .toContain(`alt="${blogPost.title}"`);
  });

  it('should feature the blog post title in the returned HTML output', () => {
    expect(compiledOutput)
      .toContain(blogPost.title);
  });

  it('should feature a link to the blog post author page in the returned HTML output', () => {
    expect(compiledOutput)
      .toContain(`href="${blogPost.author.link}"`);
  });

  it('should feature the blog post author name in the returned HTML output', () => {
    expect(compiledOutput)
      .toContain(blogPost.author.name);
  });

  it('should feature the blog ppost date as a microformat tag in the returned HTML output', () => {
    expect(compiledOutput)
      .toContain(`datetime="${blogPost.date}"`);
  });

  it('should not feature an image element if the input blog post lacks a populated <imageSourceUrl> property', () => {
    const imageLessBlogPost: BlogPost = { ...blogPost, imageSourceUrl: undefined  };
    const compiledImagelessOutput = blogPostComponent.compile(imageLessBlogPost);

    expect(compiledImagelessOutput)
      .not
      .toContain('<img');
  });
});