import React, { createContext, useState, useContext } from 'react';
import useFetchData from './components/useFetchData';

interface SearchContextProps {
searchItem: string;
setSearchItem: (term: string) => void;
apiData: any;
}
interface SearchProviderProps {
children: React.ReactNode;
}

const SearchContext = createContext<SearchContextProps | undefined>(undefined);

    export const SearchProvider: React.FC<SearchProviderProps> = ({ children }) => {
        const [searchItem, setSearchItem] = useState('');
        const { data } = useFetchData<{ Result: { Items: { Item: any[] } } }>('https://health.gov/myhealthfinder/api/v3/itemlist.json?Type=topic')
        const apiData = data?.Result?.Items?.Item || [];
        return (
        <SearchContext.Provider value={{ searchItem, setSearchItem, apiData }}>
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