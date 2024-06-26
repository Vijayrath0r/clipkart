import axios from 'axios';
import { useState, useEffect } from "react";

const useFetch = (url, requestMethod = "GET", payLoad = {}) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null); // Changed to null to capture error message

    const fetchData = async (method) => {
        setLoading(true);
        try {
            let res;
            if (method === "POST") {
                res = await axios.post(url, payLoad);
            } else {
                res = await axios.get(url);
            }
            setData(res.data);
        } catch (error) {
            setError(error); // Set error to capture error message
        }
        setLoading(false);
    };

    useEffect(() => {
        const fetchDataAsync = async () => {
            await fetchData(requestMethod);
        };
        fetchDataAsync();
    }, [url, requestMethod, JSON.stringify(payLoad)]);

    return { data, loading, error, refetchData: () => fetchData(requestMethod) };
};

export default useFetch;
