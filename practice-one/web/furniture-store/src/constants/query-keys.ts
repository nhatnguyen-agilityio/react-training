export const QUERY_KEY = {
  MAIN_CATEGORIES: ['mainCategories'],
  PRODUCTS: (start: number, end: number) => ['products', start, end],
  PRODUCTS_INFINITE: (pageSize: number, position: string) => [
    'products',
    'infinite',
    pageSize,
    position,
  ],
};
