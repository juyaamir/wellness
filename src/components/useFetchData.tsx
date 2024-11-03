import { useState, useEffect } from "react";
import axios from 'axios';

interface FetchData<T> {
    data: T | null;
    loading: boolean;
    error: string | null;
}

const useFetchData = <T,>(url: string): FetchData<T> => {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const getData = async () => {
            setLoading(true);
            try {
                const response = await axios.get(url);
                setData(response.data);
            } catch (error) {
                if (axios.isAxiosError(error)) {
                    setError(`Error: ${error.message}`);
                } else if (error instanceof Error) {
                    setError(`Error: ${error.message}`);
                } else {
                    setError(`An unknown error occurred`);
                }
            } finally {
                setLoading(false);
            }
        };
        getData();
    }, [url]);

    return { data, loading, error };
};

export default useFetchData;