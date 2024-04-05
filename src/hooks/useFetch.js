import axios from 'axios'
import { useState, useEffect } from "react"


const useFetch = (url) => {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            try {
                const res = await axios.get(url)
                setData(res.data)
            } catch (error) {
                setError(true)
            }
            setLoading(false)
        }
        fetchData();

    }, [url])
    const refetchData = async () => {
        setLoading(true)
        try {
            const res = await axios.get(url)
            setData(res.data)
        } catch (error) {
            setError(true)
        }
        setLoading(false)
    }

    return { data, loading, error, refetchData }

}


export default useFetch