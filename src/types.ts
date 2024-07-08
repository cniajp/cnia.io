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

export interface ForteeTag {
  name: string;
  color_text: string;
  color_background: string;
}

export type ForteeTimeTableTalk = {
  type: 'talk';
  uuid: string;
  url: string;
  title: string;
  abstract: string;
  accepted: boolean;
  track: {
    name: string;
    sort: number;
  };
  speaker: {
    name: string;
    kana: string;
    twitter: string;
    avatar_url: string;
  };
  feedback: {
    open: boolean;
  };
  tags: ForteeTag[];
  starts_at: string;
  length_min: number;
  fav: boolean;
  fav_count: number;
};

export type ForteeTimeTableTimeSlot = {
  type: 'timeslot';
  uuid: string;
  title: string;
  abstract: string | null;
  track: {
    name: string;
    sort: number;
  };
  starts_at: string;
  length_min: number;
};

export type ForteeTimeTable = ForteeTimeTableTalk | ForteeTimeTableTimeSlot;

export interface ForteeTimeTableResponse {
  timetable: ForteeTimeTable[];
}

export interface PEK2024ProposalList {
  proposals: PEK2024Proposal[];
}
