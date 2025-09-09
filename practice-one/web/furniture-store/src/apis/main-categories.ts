import { API_ROUTES } from '../constants/api-routers';
import { API_ENDPOINT } from '../constants/env-variables';

export const fetchMainCategories = async () => {
  const res = await fetch(`${API_ENDPOINT}${API_ROUTES.MAIN_CATEGORIES}`);
  if (!res.ok) {
    throw new Error('Network response was not ok');
  }
  return res.json();
};
