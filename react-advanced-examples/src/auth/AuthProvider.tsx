import { useState, type ReactNode } from "react";
import { AuthContext } from "./AuthContext";
import type { signUpData } from "../types/SignUp";

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<{ username: string; password: string } | null>(null);

  const login = async (username: string, password: string): Promise<boolean> => {
    try{
      const response = await fetch(`https://683417dd464b499636014699.mockapi.io/api/v1/users?username=${username}&password=${password}`)

      // Return false if the user is not found
      if (!response.ok) {
        return false;
      }

      const data = await response.json();

      // Set user if user is exists
      if (data.length > 0) {
        setUser({ username: data[0].username, password: data[0].password });
        return true;
      }
      return false;
    }
    catch (error) {
      console.log(error);
      return false;
    }
  };

  const logout = () => {
    setUser(null);
  };

  const signUp = async ({ firstName, lastName, username, email, password }: signUpData): Promise<boolean> => {
    try {
      const response = await fetch("https://683417dd464b499636014699.mockapi.io/api/v1/users", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName,
          lastName,
          username,
          email,
          password,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to create user');
      }
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, signUp }}>
      {children}
    </AuthContext.Provider>
  );
};
