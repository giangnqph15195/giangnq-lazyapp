import { useEffect, useState } from "react"
import { sreach } from "../api/blog"

const useSreach = (key, blogs) => {
    const [data, setdata] = useState([])
    useEffect(() => {
        if (key) {
            const get = async () => {
                const { data:datasreach } = await sreach(key)
                setdata(datasreach)
            }
            get()
        } else {
            setdata(blogs)
        }
    }, [key])

    return {
        data,
        setdata
    }
}

export default useSreach