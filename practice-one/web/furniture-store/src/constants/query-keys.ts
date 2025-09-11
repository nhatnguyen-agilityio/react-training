export const QUERY_KEY = {
  MAIN_CATEGORIES: ['mainCategories'],
  PRODUCTS: (start: number, end: number) => ['products', start, end],
  PRODUCTS_INFINITE: (
    pageSize: number,
    position: string,
    categoryId?: string | null,
  ) => ['products', 'infinite', pageSize, position, categoryId],
};
