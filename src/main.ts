import './polyfills';

import settings from './settings';
import { BlogComponent, ErrorComponent } from './ui';
import { fetchBlogPosts, serializeBlogPosts } from './data';

const blogComponent = new BlogComponent();
const errorComponent = new ErrorComponent();
const renderApp = (html: string): void => { document.querySelector('.app')!.innerHTML = html };

fetchBlogPosts(settings)
  .then(serializeBlogPosts)
  .then(blogComponent.compile, errorComponent.compile)
  .then(renderApp);
