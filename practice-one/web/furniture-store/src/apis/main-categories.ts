import { useQuery } from '@tanstack/react-query';
import { API_ROUTES } from '../constants/api-routers';
import { API_ENDPOINT } from '../constants/env-variables';
import { QUERY_KEY } from '../constants/query-keys';

const fetchMainCategories = async () => {
  const res = await fetch(`${API_ENDPOINT}${API_ROUTES.MAIN_CATEGORIES}`);
  if (!res.ok) {
    throw new Error('Network response was not ok');
  }
  return res.json();
};

export const GetMainCategories = (enabled = true) => {
  return useQuery({
    queryKey: QUERY_KEY.MAIN_CATEGORIES,
    queryFn: fetchMainCategories,
    enabled,
    staleTime: 1000 * 60 * 5,
  });
};
