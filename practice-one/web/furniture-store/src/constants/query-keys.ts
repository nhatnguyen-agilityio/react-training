export const QUERY_KEY = {
  MAIN_CATEGORIES: ['mainCategories'],
  SUB_CATEGORIES: (mainCategory: string | null) => [
    'subCategories',
    mainCategory,
  ],
  PRODUCTS: (start: number, end: number) => ['products', start, end],
  PRODUCTS_INFINITE: (
    pageSize: number,
    position: string,
    categoryId?: string | null,
    searchParam?: string | null,
    subCategoryName?: string | null,
  ) => [
    'products',
    'infinite',
    pageSize,
    position,
    categoryId,
    searchParam,
    subCategoryName,
  ],
};
