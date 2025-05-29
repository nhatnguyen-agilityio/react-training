import { createContext } from "react";
import type { signUpData } from "../types/SignUp";

export type AuthContextType = {
  user: { username: string; password: string } | null;
  login: (username: string, password: string) => Promise<boolean>;
  logout: () => void;
  signUp: (data: signUpData) => Promise<boolean>;
};

export const AuthContext = createContext<AuthContextType | null>(null)
