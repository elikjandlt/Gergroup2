export interface Media {
  readonly url: string;
  readonly altText?: string;
  readonly width?: number;
  readonly height?: number;
}

export interface Category {
  readonly _id: string;
  readonly name: string;
  readonly slug: string;
  readonly description?: string;
}

export interface Tag {
  readonly _id: string;
  readonly name: string;
  readonly colorCode?: string;
}

export type PostStatus = "published" | "draft" | "archived";

export interface Post {
  readonly _id: string;
  readonly title: string;
  readonly slug: string;
  readonly excerpt?: string;
  readonly content?: string;
  readonly status: PostStatus;
  readonly publishedDate?: string;
  readonly category?: Category;
  readonly tags?: readonly Tag[];
  readonly featuredImage?: Media;
}

export interface NavItem {
  readonly _id: string;
  readonly label: string;
  readonly url: string;
  readonly order: number;
  readonly target?: string;
}

export interface PageItem {
  readonly _id: string;
  readonly name?: string;
  readonly type?: string;
  readonly content?: string;
  readonly order?: number;
}

export interface CmsPage {
  readonly _id: string;
  readonly name: string;
  readonly slug: string;
  readonly description?: string;
  readonly content?: string;
  readonly status?: string;
  readonly pageItems?: readonly PageItem[];
}
