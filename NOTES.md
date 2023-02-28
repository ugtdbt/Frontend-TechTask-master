## Note
- I have added reverse engineered GQL Schema for this project (`client/src/gql/schema.gql`).
- I have added search suggestions functionality for this project.
- I have removed server cache in the `server.ts`.
- 0 linting issues
- 0 console issues


## Aditional Added Scripts

- Run unit test

`npm run test`
`npm run test:coverage`

- Find and fix problems in typescript codebase

`npm run lint`
`npm run lint:fix`

- Code Formatter

`npm run format`
`npm run format:check`

## GraphQL Code Generator

`npm run gentypes`


## Code spelling check

`cspell "**/*.{tsx,ts}"`

- Reverse engineered GQL Schema

---------------------------------------------------------------------------------------------

```
type Query {
  productLists(ids:[String!], locale: Locale!): [ProductList]
  
  autoSuggestion_v2(
    prefix: String!
    locale: Locale!
    format: ArticleImageFormat
    backend: SearchBackend
    userAgent: String
    userIP: String
    thirdPartyClientId: String
    thirdPartySessionId: String
  ): [SearchSuggestion]
}

type ProductList {
  name: String
  articleCount: Int
  childrenProductLists: [ChildProductList]
  articlesList(first: Int!): Articles
}

type ChildProductList {
  list: [ChildProduct]
}

type ChildProduct {
  name: String
  urlPath: String
}

type Articles {
  articles: [Article]
}

type Article {
  name: String
  variantName: String
  prices: Price
  images(format: ProductListImageFormat, maxWidth: Int!, maxHeight: Int!, limit: Int!): [Image]
}

type Price {
  currency: String
  regular: Regular
}

type Regular {
  value: Float
}

type Image {
  path: String
}

type SearchSuggestion {
  name: String!
  image(format: ArticleImageFormat): String
  total: Int!
}

enum Locale {
  de_DE
}

enum ProductListImageFormat {
  WEBP
}

enum ArticleImageFormat {
  WEBP
}

enum SearchBackend {
  ThirdParty
}
```

---------------------------------------------------------------------------------------------

## Unit Test Coverage

`npm run test:coverage`

```
-----------------------------|---------|----------|---------|---------|-------------------
File                         | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
-----------------------------|---------|----------|---------|---------|-------------------
All files                    |   45.83 |       12 |   34.88 |   46.01 |                   
 src                         |       0 |        0 |       0 |       0 |                   
  Layout.tsx                 |       0 |        0 |       0 |       0 | 14-58             
  index.tsx                  |       0 |      100 |     100 |       0 | 13-16             
  routes.tsx                 |       0 |        0 |       0 |       0 |                   
 src/components              |       0 |        0 |       0 |       0 |                   
  index.ts                   |       0 |        0 |       0 |       0 |                   
 src/components/Article      |     100 |      100 |     100 |     100 |                   
  ArticleComponent.tsx       |     100 |      100 |     100 |     100 |                   
  index.ts                   |       0 |        0 |       0 |       0 |                   
 src/components/Footer       |     100 |      100 |     100 |     100 |                   
  FooterComponent.tsx        |     100 |      100 |     100 |     100 |                   
  index.ts                   |       0 |        0 |       0 |       0 |                   
 src/components/Header       |   41.66 |        0 |      30 |   43.47 |                   
  HeaderComponent.tsx        |   41.66 |        0 |      30 |   43.47 | 38-41,56-71,103   
  index.ts                   |       0 |        0 |       0 |       0 |                   
 src/components/Price        |     100 |      100 |     100 |     100 |                   
  PriceComponent.tsx         |     100 |      100 |     100 |     100 |                   
  index.ts                   |       0 |        0 |       0 |       0 |                   
 src/components/SideBar      |   85.71 |       50 |     100 |   85.71 |                   
  SideBarComponent.tsx       |   85.71 |       50 |     100 |   85.71 | 18                
  index.ts                   |       0 |        0 |       0 |       0 |                   
 src/gql                     |   71.42 |       50 |      50 |   71.42 |                   
  index.ts                   |       0 |        0 |       0 |       0 |                   
  product.generated-query.ts |   71.42 |       50 |      50 |   71.42 | 124,144-147,184   
 src/pages                   |       0 |        0 |       0 |       0 |                   
  HomePage.tsx               |       0 |        0 |       0 |       0 | 12-56             
  SearchPage.tsx             |       0 |      100 |       0 |       0 | 10-27             
 src/state                   |       0 |      100 |     100 |       0 |                   
  index.ts                   |       0 |        0 |       0 |       0 |                   
  store.ts                   |       0 |      100 |     100 |       0 | 5                 
 src/state/actionCreators    |       0 |      100 |       0 |       0 |                   
  productActionCreator.ts    |       0 |      100 |       0 |       0 | 5-24              
 src/state/actionTypes       |       0 |        0 |       0 |       0 |                   
  productActionTypes.ts      |       0 |        0 |       0 |       0 |                   
 src/state/reducers          |       0 |        0 |       0 |       0 |                   
  index.ts                   |       0 |      100 |     100 |       0 | 4                 
  productReducer.ts          |       0 |        0 |       0 |       0 | 4-36              
 src/styles                  |   77.77 |      100 |      75 |      80 |                   
  header.ts                  |    87.5 |      100 |      75 |     100 |                   
  theme.ts                   |       0 |      100 |     100 |       0 | 3                 
 src/testUtils/mockData      |     100 |      100 |     100 |     100 |                   
  articleMockData.ts         |     100 |      100 |     100 |     100 |                   
  footerMockData.ts          |     100 |      100 |     100 |     100 |                   
  headerMockData.ts          |     100 |      100 |     100 |     100 |                   
  priceMockData.ts           |     100 |      100 |     100 |     100 |                   
  sideBarMockData.ts         |     100 |      100 |     100 |     100 |                   
 src/utils                   |     100 |      100 |     100 |     100 |                   
  Interfaces.ts              |       0 |        0 |       0 |       0 |                   
  formatter.ts               |     100 |      100 |     100 |     100 |                   
  graphqlClient.ts           |     100 |      100 |     100 |     100 |                   
  react-query-client.ts      |     100 |      100 |     100 |     100 |                   
-----------------------------|---------|----------|---------|---------|-------------------

Test Suites: 5 passed, 5 total
Tests:       17 passed, 17 total
Snapshots:   5 passed, 5 total
Time:        5.743 s
```