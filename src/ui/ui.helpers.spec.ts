import { slugify } from './ui.helpers';

describe('slugify', () => {
  it('should replace space chars by kebab char by default', () => {
    expect(slugify('blog announcements')).toEqual('blog-announcements');
  });
  
  it('should return a slug text in lowercase', () => {
    expect(slugify('Blog Announcements')).toEqual<string>('blog-announcements');
    expect(slugify('BLOG AnnOunCemEntS')).toEqual<string>('blog-announcements');
  });
  
  it('should replace all empty spaces in input string if more than one', () => {
    expect(slugify('Cloud and Server')).toEqual<string>('cloud-and-server');
  });
  
  it('should leave non alphanumeric chars and spaces as is', () => {
    expect(slugify('Using & in QueryStrings')).toEqual<string>('using-&-in-querystrings');
  });
  
  it('should allow to optionally configure different joining chars in resulting slug', () => {
    expect(slugify('Cloud and Server', '_')).toEqual<string>('cloud_and_server');
    expect(slugify('Cloud and Server', '+')).toEqual<string>('cloud+and+server');
  });
});