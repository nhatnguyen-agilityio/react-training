import { useEffect, useState, type ReactNode } from 'react';
import type { UserStoreInterface } from '../interfaces/user';
import { AuthContext } from './AuthContext';
import type { CustomerInfoInterface } from '../interfaces/customerInfo';
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUserData] = useState<UserStoreInterface | null>(null);
  const [customerInfo, setCustomerInfoData] =
    useState<CustomerInfoInterface | null>(null);

  useEffect(() => {
    const savedUser =
      localStorage.getItem('authUser') || sessionStorage.getItem('authUser');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }

    const savedCustomerInfo = localStorage.getItem('customerInfo');
    if (savedCustomerInfo) {
      setCustomerInfo(JSON.parse(savedCustomerInfo));
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

  const setCustomerInfo = (customerInfo: CustomerInfoInterface) => {
    localStorage.setItem('customerInfo', JSON.stringify(customerInfo));
    setCustomerInfoData(customerInfo);
  };

  const removeCustomerInfo = () => {
    localStorage.removeItem('customerInfo');
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        logout,
        setCustomerInfo,
        removeCustomerInfo,
        customerInfo,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
