export interface State<T> {
  data: T;
  error: boolean;
  loading: boolean;
}

export interface Category {
  name: string;
  articleCount: number;
  childrenCategories: { list: ChildCategory[] };
  categoryArticles: { articles: Article[] };
}

export interface ChildCategory {
  name: string;
  urlPath: string;
}

export interface Article {
  name: string;
  index: number;
  prices: Price;
  images: Image[];
}

export interface Price {
  currency: string;
  regular: Regular;
}

export interface Regular {
  value: number;
}

export interface Image {
  path: string;
}

export interface Action<T> {
  type: string;
  payload?: T;
}
