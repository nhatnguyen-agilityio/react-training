import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { useInfiniteQuery } from '@tanstack/react-query';
import { API_ROUTES } from '../constants/api-routers';
import { API_ENDPOINT } from '../constants/env-variables';
import { QUERY_KEY } from '../constants/query-keys';

const fetchProducts = async (
  start = 0,
  end = 20,
  sortBy = 'createdAt',
  order: 'asc' | 'desc' = 'desc',
  categoryId?: string | null,
  searchParam?: string | null,
) => {
  const url = new URL(`${API_ENDPOINT}${API_ROUTES.PRODUCTS}`);
  url.searchParams.set('_start', String(start));
  url.searchParams.set('_end', String(end));
  url.searchParams.set('_sort', String(sortBy));
  url.searchParams.set('_order', String(order));

  if (categoryId) {
    url.searchParams.set('mainCategoryId', String(categoryId));
  }

  if (searchParam) {
    url.searchParams.set('name_like', searchParam);
  }

  const res = await fetch(url.toString());
  if (!res.ok) {
    throw new Error('Network response was not ok');
  }
  return res.json();
};

export const GetProducts = (start = 0, end = 20, enabled = true) => {
  return useQuery({
    queryKey: QUERY_KEY.PRODUCTS(start, end),
    queryFn: () => fetchProducts(start, end),
    enabled,
    staleTime: 1000 * 60 * 5,
    placeholderData: keepPreviousData,
  });
};

const mapSort = (
  position: string,
): { sortBy: 'createdAt' | 'price'; order: 'asc' | 'desc' } => {
  switch (position) {
    case 'lowToHigh':
      return { sortBy: 'price', order: 'asc' };
    case 'highToLow':
      return { sortBy: 'price', order: 'desc' };
    case 'mostRecent':
    default:
      return { sortBy: 'createdAt', order: 'desc' };
  }
};

const fetchProductsPage = async (
  pageIndex = 0,
  pageSize = 20,
  position = 'mostRecent',
  categoryId?: string | null,
  searchParam?: string | null,
) => {
  const start = pageIndex * pageSize;
  const end = start + pageSize;
  const { sortBy, order } = mapSort(position);
  return fetchProducts(start, end, sortBy, order, categoryId, searchParam);
};

export const GetProductsInfinite = (
  pageSize = 20,
  position = 'mostRecent',
  categoryId?: string | null,
  searchParam?: string | null,
  enabled = true,
) => {
  return useInfiniteQuery({
    queryKey: QUERY_KEY.PRODUCTS_INFINITE(
      pageSize,
      position,
      categoryId,
      searchParam,
    ),
    queryFn: ({ pageParam = 0 }) =>
      fetchProductsPage(pageParam, pageSize, position, categoryId, searchParam),
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) => {
      return Array.isArray(lastPage) && lastPage.length === pageSize
        ? allPages.length
        : undefined;
    },
    enabled,
    staleTime: 1000 * 60 * 5,
  });
};
