import { useEffect, useState, type ReactNode } from 'react';
import type { UserStoreInterface } from '../interfaces/user';
import { AuthContext } from './AuthContext';
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUserData] = useState<UserStoreInterface | null>(null);

  useEffect(() => {
    const savedUser =
      localStorage.getItem('authUser') || sessionStorage.getItem('authUser');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const setUser = (user: UserStoreInterface | null) => {
    if (user) {
      sessionStorage.setItem('authUser', JSON.stringify(user));
    } else {
      sessionStorage.removeItem('authUser');
    }
    setUserData(user);
  };

  const logout = () => {
    setUser(null);
    sessionStorage.removeItem('authUser');
  };

  return (
    <AuthContext.Provider value={{ user, setUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
