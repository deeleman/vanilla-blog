export interface RawBlogPost {
  id: number;
  title: {
    rendered: string;
  };
  link: string;
  _embedded: {
    author: Array<{ name: string; link: string }>
    'wp:featuredmedia': Array<{ source_url: string }>
    'wp:term': Array<{ taxonomy: 'group' | 'topic' | 'post_tag' | string; name: string; link: string }[]>; 
  };
  date: string;
}

export type RawBlogPosts = RawBlogPost[];

export interface BlogPost {
  id: number;
  title: string;
  link: string;
  author: {
    name: string;
    link: string;
  }
  date: string;
  imageSourceUrl: string;
  groups: Array<{ name: string; link: string }>;
}

export type BlogPosts = BlogPost[];

export type Settings = Readonly<{
  apiUrl: string;
  pageSize: number;
  pageIndex: number;
}>;
