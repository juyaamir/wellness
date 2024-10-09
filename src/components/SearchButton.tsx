import { useSearch } from "../context";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";

const SearchButton = () => {
    const { searchItem, setSearchItem } = useSearch();
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (location.pathname === '/search' || location.pathname === '/') {
            if (searchItem === '') {
                navigate('/');
            } else {
                navigate('/search');
            }
        }
    }, [searchItem, navigate, location.pathname]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchItem(e.target.value);
    };

    return (
        <div className='flex gap-2 py-2 px-4 bg-gray-200 justify-center'>
            <input
                type="search"
                placeholder='Search Wellness Hub...'
                value={searchItem}
                onChange={handleChange}
                className='flex-grow max-w-xs p-2 outline-none border border-gray-400 shadow-md focus:border-green-400 search-input rounded-xl'
            />
        </div>
    );
};

export default SearchButton;