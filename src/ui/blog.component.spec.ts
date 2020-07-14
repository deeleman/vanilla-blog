import { BlogPosts } from '../data';
import { dataFixtures } from '../data/test';
import { BlogComponent } from './blog.component';

describe('BlogComponent', () => {
  const blogComponent = new BlogComponent();
  const blogPosts = dataFixtures as BlogPosts;
  let compiledOutput: string;

  beforeEach(() => compiledOutput = blogComponent.compile(blogPosts));
  
  it('should feature the all blog posts used for compilation in the returned HTML output', () => {
    for (let index = 0; index < blogPosts.length; index++) {
      expect(compiledOutput)
        .toContain(blogPosts[index].link);
    }
  });
  
  it('should wrap the rendered blog posts by a <section> element in the returned HTML output', () => {
    expect(compiledOutput.trim().startsWith('<section'))
      .toBeTruthy();
    expect(compiledOutput.trim().endsWith('</section>'))
      .toBeTruthy();
  });
});