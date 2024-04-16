import type {AstroSeoProps} from '@astrolib/seo';
export interface Post {
  id: string;
  slug: string;

  publishDate: Date;
  title: string;
  description?: string;

  image?: string;

  canonical?: string | URL;
  permalink?: string;

  draft?: boolean;

  excerpt?: string;
  category?: string;
  tags?: Array<string>;
  author?: string;

  Content: unknown;
  content?: string;

  readingTime?: number;
}

export interface MetaSEO {
  title?: string;
  description?: string;
  image?: string;

  canonical?: string | URL;
  noindex?: boolean;
  nofollow?: boolean;

  ogTitle?: string;
  ogType?: string;
}

export interface PEK2024MetaSEO extends AstroSeoProps {
  imagePath?: string;
  useTitleTemplate?: boolean;
};

export interface PEK2024Proposal {
  uuid: string;
  url: string;
  title: string;
  abstract: string;
  accepted: boolean;
  speaker: {
    name: string;
    kana: string;
    twitter: string;
    avatar_url: string;
  };
  created: string;
  feedback: {
    open: boolean;
  };
}

export interface PEK2024ProposalList {
  proposals: PEK2024Proposal[];
}
