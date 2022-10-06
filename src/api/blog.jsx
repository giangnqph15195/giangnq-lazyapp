import instance from "./intansce";

export const getall = () =>{
    const url = `/posts`
    return instance.get(url)
}
export const getone = (id)=>{
    const url = `/posts/${id}`
    return instance.get(url)
}
export const sreach = (note) =>{
    const url = `/posts?q=${note}`
    return instance.get(url)
}