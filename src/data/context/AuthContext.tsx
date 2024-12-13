import User from '@/model/User';
import { createContext, useState } from 'react';

type AuthContextType = {
  user: User | null;
  login: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType>({
  user: null,
  login: async () => {},
});

type AuthProviderProps = {
  children: React.ReactNode;
};

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);

  async function login() {
    setUser({} as User);
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
