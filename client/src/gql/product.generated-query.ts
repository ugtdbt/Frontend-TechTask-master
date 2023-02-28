/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import * as Types from "./.";

import { GraphQLClient } from "graphql-request";
import { RequestInit } from "graphql-request/dist/types.dom";
import {
  useQuery,
  useInfiniteQuery,
  UseQueryOptions,
  UseInfiniteQueryOptions,
} from "@tanstack/react-query";

function fetcher<TData, TVariables extends { [key: string]: any }>(
  client: GraphQLClient,
  query: string,
  variables?: TVariables,
  requestHeaders?: RequestInit["headers"]
) {
  return async (): Promise<TData> =>
    client.request({
      document: query,
      variables,
      requestHeaders,
    });
}
export type GetProductListsQueryVariables = Types.Exact<{
  id: Types.Scalars["String"];
  locale: Types.Locale;
}>;

export type GetProductListsQuery = {
  __typename?: "Query";
  categories?: Array<{
    __typename?: "ProductList";
    name?: string | null;
    articleCount?: number | null;
    childrenCategories?: Array<{
      __typename?: "ChildProductList";
      list?: Array<{
        __typename?: "ChildProduct";
        name?: string | null;
        urlPath?: string | null;
      } | null> | null;
    } | null> | null;
    categoryArticles?: {
      __typename?: "Articles";
      articles?: Array<{
        __typename?: "Article";
        name?: string | null;
        variantName?: string | null;
        prices?: {
          __typename?: "Price";
          currency?: string | null;
          regular?: { __typename?: "Regular"; value?: number | null } | null;
        } | null;
        images?: Array<{
          __typename?: "Image";
          path?: string | null;
        } | null> | null;
      } | null> | null;
    } | null;
  } | null> | null;
};

export type SearchSuggestionsV2QueryVariables = Types.Exact<{
  prefix: Types.Scalars["String"];
  locale: Types.Locale;
  format?: Types.InputMaybe<Types.ArticleImageFormat>;
  backend?: Types.InputMaybe<Types.SearchBackend>;
  userAgent?: Types.InputMaybe<Types.Scalars["String"]>;
  userIP?: Types.InputMaybe<Types.Scalars["String"]>;
  thirdPartyClientId?: Types.InputMaybe<Types.Scalars["String"]>;
  thirdPartySessionId?: Types.InputMaybe<Types.Scalars["String"]>;
}>;

export type SearchSuggestionsV2Query = {
  __typename?: "Query";
  suggestions?: Array<{
    __typename?: "SearchSuggestion";
    name: string;
    image?: string | null;
    count: number;
  } | null> | null;
};

export const GetProductListsDocument = `
    query GetProductLists($id: String!, $locale: Locale!) {
  categories: productLists(ids: [$id], locale: $locale) {
    name
    articleCount
    childrenCategories: childrenProductLists {
      list {
        name
        urlPath
      }
    }
    categoryArticles: articlesList(first: 100) {
      articles {
        name
        variantName
        prices {
          currency
          regular {
            value
          }
        }
        images(format: WEBP, maxWidth: 200, maxHeight: 200, limit: 1) {
          path
        }
      }
    }
  }
}
    `;
export const useGetProductListsQuery = <
  TData = GetProductListsQuery,
  TError = unknown
>(
  client: GraphQLClient,
  variables: GetProductListsQueryVariables,
  options?: UseQueryOptions<GetProductListsQuery, TError, TData>,
  headers?: RequestInit["headers"]
) =>
  useQuery<GetProductListsQuery, TError, TData>(
    ["GetProductLists", variables],
    fetcher<GetProductListsQuery, GetProductListsQueryVariables>(
      client,
      GetProductListsDocument,
      variables,
      headers
    ),
    options
  );
export const useInfiniteGetProductListsQuery = <
  TData = GetProductListsQuery,
  TError = unknown
>(
  pageParamKey: keyof GetProductListsQueryVariables,
  client: GraphQLClient,
  variables: GetProductListsQueryVariables,
  options?: UseInfiniteQueryOptions<GetProductListsQuery, TError, TData>,
  headers?: RequestInit["headers"]
) =>
  useInfiniteQuery<GetProductListsQuery, TError, TData>(
    ["GetProductLists.infinite", variables],
    (metaData) =>
      fetcher<GetProductListsQuery, GetProductListsQueryVariables>(
        client,
        GetProductListsDocument,
        { ...variables, ...(metaData.pageParam ?? {}) },
        headers
      )(),
    options
  );

export const SearchSuggestionsV2Document = `
    query SearchSuggestionsV2($prefix: String!, $locale: Locale!, $format: ArticleImageFormat, $backend: SearchBackend, $userAgent: String, $userIP: String, $thirdPartyClientId: String, $thirdPartySessionId: String) {
  suggestions: autoSuggestion_v2(
    prefix: $prefix
    locale: $locale
    backend: $backend
    userAgent: $userAgent
    userIP: $userIP
    thirdPartyClientId: $thirdPartyClientId
    thirdPartySessionId: $thirdPartySessionId
  ) {
    ... on SearchSuggestion {
      name
      image(format: $format)
      count: total
    }
  }
}
    `;
export const useSearchSuggestionsV2Query = <
  TData = SearchSuggestionsV2Query,
  TError = unknown
>(
  client: GraphQLClient,
  variables: SearchSuggestionsV2QueryVariables,
  options?: UseQueryOptions<SearchSuggestionsV2Query, TError, TData>,
  headers?: RequestInit["headers"]
) =>
  useQuery<SearchSuggestionsV2Query, TError, TData>(
    ["SearchSuggestionsV2", variables],
    fetcher<SearchSuggestionsV2Query, SearchSuggestionsV2QueryVariables>(
      client,
      SearchSuggestionsV2Document,
      variables,
      headers
    ),
    options
  );
export const useInfiniteSearchSuggestionsV2Query = <
  TData = SearchSuggestionsV2Query,
  TError = unknown
>(
  pageParamKey: keyof SearchSuggestionsV2QueryVariables,
  client: GraphQLClient,
  variables: SearchSuggestionsV2QueryVariables,
  options?: UseInfiniteQueryOptions<SearchSuggestionsV2Query, TError, TData>,
  headers?: RequestInit["headers"]
) =>
  useInfiniteQuery<SearchSuggestionsV2Query, TError, TData>(
    ["SearchSuggestionsV2.infinite", variables],
    (metaData) =>
      fetcher<SearchSuggestionsV2Query, SearchSuggestionsV2QueryVariables>(
        client,
        SearchSuggestionsV2Document,
        { ...variables, ...(metaData.pageParam ?? {}) },
        headers
      )(),
    options
  );
