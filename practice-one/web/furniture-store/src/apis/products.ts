import { useQuery } from '@tanstack/react-query';
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
  });
};
