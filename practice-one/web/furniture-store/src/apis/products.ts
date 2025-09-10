import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { useInfiniteQuery } from '@tanstack/react-query';
import { API_ROUTES } from '../constants/api-routers';
import { API_ENDPOINT } from '../constants/env-variables';
import { QUERY_KEY } from '../constants/query-keys';

const fetchProducts = async (start = 0, end = 20) => {
  const url = new URL(`${API_ENDPOINT}${API_ROUTES.PRODUCTS}`);
  url.searchParams.set('_start', String(start));
  url.searchParams.set('_end', String(end));
  const res = await fetch(url.toString());
  if (!res.ok) {
    throw new Error('Network response was not ok');
  }
  return res.json();
};

export const GetProducts = (start = 0, end = 20, enabled = true) => {
  return useQuery({
    queryKey: [QUERY_KEY.PRODUCTS, start, end],
    queryFn: () => fetchProducts(start, end),
    enabled,
    staleTime: 1000 * 60 * 5,
    placeholderData: keepPreviousData,
  });
};

const fetchProductsPage = async (pageIndex = 0, pageSize = 20) => {
  const start = pageIndex * pageSize;
  const end = start + pageSize;
  return fetchProducts(start, end);
};

export const GetProductsInfinite = (pageSize = 20, enabled = true) => {
  return useInfiniteQuery({
    queryKey: [QUERY_KEY.PRODUCTS, 'infinite', pageSize],
    queryFn: ({ pageParam = 0 }) => fetchProductsPage(pageParam, pageSize),
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
