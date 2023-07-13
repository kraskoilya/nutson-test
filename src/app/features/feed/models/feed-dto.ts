export interface FeedDto {
  data: FeedPagination;
}

export interface FeedPagination {
  media: Medum[];
  page_token: string;
  next_page_token: string;
  prev_page_token: any;
  recommendation_id: string;
}

export interface Medum {
  author: Author;
  media_id: string;
  media_name: string;
  media_description?: string;
  created_at: number;
  categories: any[];
  counters: Counters2;
  parent_resource_reference: ParentResourceReference;
  moderation_status: string;
  deleted_at: any;
  preview_url: string;
  media_url: string;
  media_urls: MediaUrls;
  thumbnail_url: string;
  is_boosted: boolean;
  is_liked: boolean;
  is_deleted: boolean;
  is_blocked: boolean;
  is_hidable: boolean;
  is_challenge_winner: boolean;
  is_deletable: boolean;
  is_reportable: boolean;
  media_duration: number;
  allow_comments: boolean;
  boost_coefficient: number;
  user_likes_preview: any[];
  show_id: any;
  votes: any;
  is_voted: boolean;
  is_votable: boolean;
  challenge_stage: string;
  show_views: any;
  audio: any;
}

export interface Author {
  user_name: string;
  person_name: any;
  user_bio?: string;
  user_id: string;
  user_avatar_url: string;
  counters: Counters;
  subscriptions: Subscriptions;
  is_blocked: boolean;
  is_blockable: boolean;
  is_reportable: boolean;
  is_identity_confirmed: boolean;
  is_followable: boolean;
  is_deleted: boolean;
}

export interface Counters {
  videos: number;
  followers: number;
  followings: number;
  likes: number;
}

export interface Subscriptions {
  is_following: boolean;
}

export interface Counters2 {
  likes: number;
  views: number;
  comments: number;
  reposts: number;
}

export interface ParentResourceReference {
  resource_type: string;
  resource_id: string;
  resource_url: any;
  resource_title: string;
}

export interface MediaUrls {
  h264_low: string;
  h264_high?: string;
  h264_medium?: string;
}
