import './polyfills';

import settings from './settings';
import { BlogComponent, ErrorComponent } from './ui';
import { blogPostsHttpClient, blogPostsSerializer } from './data';

const blogComponent = new BlogComponent();
const errorComponent = new ErrorComponent();
const renderApp = (html: string): void => { document.getElementById('app').innerHTML = html };

blogPostsHttpClient(settings)
  .then(blogPostsSerializer)
  .then(blogComponent.compile, errorComponent.compile)
  .then(renderApp);
