import { useEffect, useState } from "react"
import { getall, getone } from "../api/blog"

const BlogsHook = (id) =>{
    const [data,setdata] = useState([])
    const [posts, setposts] = useState({})
    const [status, setstatus] = useState(false)
        useState(()=>{
            const get = async () =>{
                const {data: blog} = await getall()
                setdata(blog)
            }
            get()
        },[])

        useEffect(() => {
            const get = async () => {
                const { data } = await getone(id)
                if (data) {
                    setposts(data)
                    setstatus(true)
                } else {
                    setstatus(false)
                }
            }
            get()
        }, [id])
    return{
        data,
        posts,
        status
    }
}

export default BlogsHook