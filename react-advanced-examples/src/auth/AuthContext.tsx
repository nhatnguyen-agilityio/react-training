import { createContext } from "react";

export type AuthContextType = {
  user: { username: string; password: string } | null;
  login: (username: string, password: string) => boolean;
  logout: () => void;
};

export const AuthContext = createContext<AuthContextType | null>(null)
