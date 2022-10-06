import axios from "axios"
import { useEffect, useState } from "react"


const UserHook = (id) => {
        const [data,setdata] = useState([])
    const [page, setpage] = useState([])
        useEffect(()=>{
            const getuser = async () =>{
                const {data:user} = await   axios.get(`https://reqres.in/api/users?page=${id}`)
                setdata(user.data)
                setpage(user.total_pages)
            }
            getuser()
        },[id])
    return {
        data,
        page,
        setdata
    }
}


export default UserHook