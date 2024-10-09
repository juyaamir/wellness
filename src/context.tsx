// context/SearchContext.tsx
import React, { createContext, useState, useContext } from 'react';

interface SearchContextProps {
  searchItem: string;
  setSearchItem: (term: string) => void;
}

const SearchContext = createContext<SearchContextProps | undefined>(undefined);

export const SearchProvider: React.FC = ({ children }) => {
  const [searchItem, setSearchItem] = useState('');

  return (
    <SearchContext.Provider value={{ searchItem, setSearchItem }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error('useSearch must be used within a SearchProvider');
  }
  return context;
};