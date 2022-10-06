import React, { useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import Pagination from './Pagination'
import TableStyle from './TableStyle'
import { FaPen, FaTrashAlt } from 'react-icons/fa';
import UseHook from '../../hook/UseHook'

function ListUser(props) {
    const [sort, setsort] = useState("")
    const { id } = useParams()
    const { data, page, setdata } = UseHook(id)
    console.log(sort)
    const columns = [
        { field: "id", Header: "ID" },
        { field: "first_name", Header: "First Name" },
        { field: "last_name", Header: "Last Name" },
        { field: "email", Header: "Email" },
        { field: "avatar", Header: "Avatar", Columsfunction: (dataAvatar) => <div><img src={`${dataAvatar}`} alt="" /></div> },
        {
            field: "id",
            Header: "Action", AcitonFunc: (col) => {
                return (
                    <p>
                        <button className='btn-aciton'><NavLink className={'edit'} to={`/edit/${col}`}><FaPen /></NavLink></button>
                        <button className='btn-aciton'><FaTrashAlt /></button>
                    </p>
                )
            }
        }
    ]
    return (
        <div>
            <TableStyle data={data} columns={columns} setsort={setsort} setdata={setdata} />
            <div className='max-w-4xl m-auto pb-[50px]'>
                <Pagination setdata={setdata} datapage={page} namepage={"user"} />
            </div>

        </div>
    )
}


export default ListUser
