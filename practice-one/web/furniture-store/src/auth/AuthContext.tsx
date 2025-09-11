import { createContext } from 'react';
import type { UserStoreInterface } from '../interfaces/user';

export type AuthContextType = {
  user: UserStoreInterface | null;
  setUser: (user: UserStoreInterface | null) => void;
  logout: () => void;
};

export const AuthContext = createContext<AuthContextType | null>(null);
