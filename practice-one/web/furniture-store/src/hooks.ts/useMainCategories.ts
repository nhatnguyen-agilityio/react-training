import { useQuery } from '@tanstack/react-query';
import { fetchMainCategories } from '../apis/main-categories';
import { QUERY_KEY } from '../constants/query-keys';

export const useMainCategories = (enabled = true) => {
  return useQuery({
    queryKey: QUERY_KEY.MAIN_CATEGORIES,
    queryFn: fetchMainCategories,
    enabled,
    staleTime: 1000 * 60 * 5,
  });
};  
