import { slugify } from './ui.helpers';
import { Component } from './ui.models';
import { BlogPost } from '../data';

export class BlogPostComponent implements Component {
  compile(post: BlogPost): string {
    return (`
      <article class="blog-post-card blog-post-card--${slugify(post.groups[0].name)} col-4">
        <header class="blog-post-card__header">
          <h5 class="p-muted-heading">
            ${post.groups[0].name}
          </h5>
        </header>
    
        <div class="blog-post-card__content">
          <div class="content__image">
            <a href="${post.link}" tabindex="-1">
              <img src="${post.imageSourceUrl}" alt="${post.title}">
            </a>
          </div>
    
          <h4 class="content__title">
            <a href="${post.link}">
             ${post.title}
            </a>
          </h4>
    
          <address>
            by <a href="${post.author.link}" rel="author">${post.author.name}</a> 
            on <time pubdate datetime="${post.date}" title="${post.date}">${post.date}</time>
          </address>
        </div>
    
        <p class="blog-post-card__footer u-no-margin--bottom">
          Article
        </p>
      </article>
    `);
  }
}
