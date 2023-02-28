export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Article = {
  __typename?: "Article";
  images?: Maybe<Array<Maybe<Image>>>;
  name?: Maybe<Scalars["String"]>;
  prices?: Maybe<Price>;
  variantName?: Maybe<Scalars["String"]>;
};

export type ArticleImagesArgs = {
  format?: InputMaybe<ProductListImageFormat>;
  limit: Scalars["Int"];
  maxHeight: Scalars["Int"];
  maxWidth: Scalars["Int"];
};

export enum ArticleImageFormat {
  Webp = "WEBP",
}

export type Articles = {
  __typename?: "Articles";
  articles?: Maybe<Array<Maybe<Article>>>;
};

export type ChildProduct = {
  __typename?: "ChildProduct";
  name?: Maybe<Scalars["String"]>;
  urlPath?: Maybe<Scalars["String"]>;
};

export type ChildProductList = {
  __typename?: "ChildProductList";
  list?: Maybe<Array<Maybe<ChildProduct>>>;
};

export type Image = {
  __typename?: "Image";
  path?: Maybe<Scalars["String"]>;
};

export enum Locale {
  DeDe = "de_DE",
}

export type Price = {
  __typename?: "Price";
  currency?: Maybe<Scalars["String"]>;
  regular?: Maybe<Regular>;
};

export type ProductList = {
  __typename?: "ProductList";
  articleCount?: Maybe<Scalars["Int"]>;
  articlesList?: Maybe<Articles>;
  childrenProductLists?: Maybe<Array<Maybe<ChildProductList>>>;
  name?: Maybe<Scalars["String"]>;
};

export type ProductListArticlesListArgs = {
  first: Scalars["Int"];
};

export enum ProductListImageFormat {
  Webp = "WEBP",
}

export type Query = {
  __typename?: "Query";
  autoSuggestion_v2?: Maybe<Array<Maybe<SearchSuggestion>>>;
  productLists?: Maybe<Array<Maybe<ProductList>>>;
};

export type QueryAutoSuggestion_V2Args = {
  backend?: InputMaybe<SearchBackend>;
  format?: InputMaybe<ArticleImageFormat>;
  locale: Locale;
  prefix: Scalars["String"];
  thirdPartyClientId?: InputMaybe<Scalars["String"]>;
  thirdPartySessionId?: InputMaybe<Scalars["String"]>;
  userAgent?: InputMaybe<Scalars["String"]>;
  userIP?: InputMaybe<Scalars["String"]>;
};

export type QueryProductListsArgs = {
  ids?: InputMaybe<Array<Scalars["String"]>>;
  locale: Locale;
};

export type Regular = {
  __typename?: "Regular";
  value?: Maybe<Scalars["Float"]>;
};

export enum SearchBackend {
  ThirdParty = "ThirdParty",
}

export type SearchSuggestion = {
  __typename?: "SearchSuggestion";
  image?: Maybe<Scalars["String"]>;
  name: Scalars["String"];
  total: Scalars["Int"];
};

export type SearchSuggestionImageArgs = {
  format?: InputMaybe<ArticleImageFormat>;
};
