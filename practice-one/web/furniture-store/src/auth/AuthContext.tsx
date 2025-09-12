import { createContext } from 'react';
import type { UserStoreInterface } from '../interfaces/user';
import type { CustomerInfoInterface } from '../interfaces/customerInfo';

export type AuthContextType = {
  user: UserStoreInterface | null;
  setUser: (user: UserStoreInterface | null) => void;
  logout: () => void;
  setCustomerInfo: (customerInfo: CustomerInfoInterface) => void;
  removeCustomerInfo: () => void;
  customerInfo: CustomerInfoInterface | null;
};

export const AuthContext = createContext<AuthContextType | null>(null);
