import { createContext, useState } from 'react';

type Theme = 'dark' | '';

interface AppContextType {
  theme: Theme;
  changeTheme: () => void;
}

const AppContext = createContext<AppContextType>({
  theme: '',
  changeTheme: () => {},
});

type AppProviderProps = {
  children: React.ReactNode;
};

export function AppProvider({ children }: AppProviderProps) {
  const [theme, setTheme] = useState<Theme>('dark');

  function changeTheme() {
    setTheme((prevTheme) => (prevTheme === 'dark' ? '' : 'dark'));
  }
  return (
    <AppContext.Provider
      value={{
        theme,
        changeTheme,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default AppContext;
