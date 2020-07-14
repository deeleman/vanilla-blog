import './polyfills';

import settings from './settings';
import { BlogComponent, ErrorComponent, renderHtml } from './ui';
import { fetchBlogPosts, serializeBlogPosts, Settings } from './data';

const blogComponent = new BlogComponent();
const errorComponent = new ErrorComponent();

const bootstrap = (selector: string, settings: Settings): Promise<void> => 
  fetchBlogPosts(settings)
    .then(serializeBlogPosts)
    .then(blogComponent.compile, errorComponent.compile)
    .then(renderHtml.bind(null, selector));

bootstrap('.app', settings);
