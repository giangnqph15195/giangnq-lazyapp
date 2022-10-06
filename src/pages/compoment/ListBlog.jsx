import React, { useState } from 'react'
import TableStyle from './TableStyle'
import Sreach from './sreach';
import useSreach from '../../hook/Sreach';

function ListBlog({blogs}) {
    const [key, setkey] = useState("")
    const [sort,setsort] = useState("")
    const {data,setdata} = useSreach(key,blogs)
    console.log(sort)
    const columns = [
        { field: "id", Header: "ID" },
        { field: "title", Header: "Title" },
        { field: "image", Header: "Image", Columsfunction: (dataAvatar) => <div><img src={`${dataAvatar}`} alt="" /></div> },
        { field: "desc", Header: "Desc" },
        { field: "description", Header: "Description" },
    ]
    return (
        <div>
            <Sreach setkey={setkey} />
            <TableStyle data={data} columns={columns} setsort={setsort} setdata={setdata}/>
        </div>
    )
}


export default ListBlog
