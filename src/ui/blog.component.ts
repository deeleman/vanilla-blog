import { Component } from './ui.models';
import { BlogPosts } from '../data';
import { BlogPostComponent } from './blog-post.component';

export class BlogComponent implements Component {
  compile(posts: BlogPosts): string {
    const childBlogPosts = posts.reduce((html, post) => {
      const component = new BlogPostComponent();
      return html + component.compile(post);
    }, '');

    return `
      <section class="blog-posts row u-equal-height u-clearfix" aria-level="row">
        ${childBlogPosts}
      </section>
    `;
  }
}