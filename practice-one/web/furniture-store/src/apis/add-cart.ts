import { useMutation } from '@tanstack/react-query';
import type { CartInterface } from '../interfaces/cart';
import { API_ENDPOINT } from '../constants/env-variables';
import { API_ROUTES } from '../constants/api-routers';

const postCart = async (cartPayload: CartInterface) => {
  const url = new URL(`${API_ENDPOINT}${API_ROUTES.CARTS}`);
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(cartPayload),
  });

  if (!res.ok) {
    let message = 'Failed to login';
    try {
      const data = await res.json();
      if (data?.error) message = data.error;
    } catch {
      // ignore
    }
    throw new Error(message);
  }

  return res.json();
};

export const useAddCart = () => {
  const { mutate, mutateAsync, isPending, error, ...rest } = useMutation<
    boolean,
    Error,
    CartInterface
  >({
    mutationFn: (loginPayload) => postCart(loginPayload),
  });

  return {
    mutate,
    mutateAsync,
    ...rest,
    isLoading: isPending,
    error: error?.message || '',
  };
};
