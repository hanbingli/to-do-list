import { createContext } from 'react';

export const SearchContext = createContext({
    searchInput: null,
    searchInputHandler: () => {},

  });
  