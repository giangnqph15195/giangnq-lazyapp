import React from 'react';
import { FaPlusCircle, FaFeather, FaTrashAlt} from 'react-icons/fa';
import { NavLink, useParams, } from 'react-router-dom';
import Pagination from './Pagination';
import LazyLoad from 'react-lazyload';
import UseHook from '../../hook/UseHook';


function Table(props) {
    const {id} = useParams()
    const {data,setdata,page} = UseHook(id)

    return (
        <div className='layout_table'>
            <button className='button_add'><NavLink><FaPlusCircle /></NavLink></button>
            <LazyLoad offset={100} debounce={150} placeholder={<>Loading...</>}>
                <table className="table-auto">
                    <thead>
                        <tr>
                            <th className='text-[red]'>Index</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Avatar</th>
                            <th>Edit</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, index) => (
                            <tr key={index}>
                                <td>{item.id}</td>
                                <td>{item.first_name}</td>
                                <td>{item.last_name}</td>
                                <td>{item.email}</td>
                                <td><img src={`${item.avatar}`} alt="" /></td>
                                <td><button><NavLink className={'edit'} to={`edit/${item.id}`}><FaFeather /></NavLink></button></td>
                                <td><button><FaTrashAlt /></button></td>
                            </tr>
                        ))}


                    </tbody>
                </table>
                <Pagination setdata={setdata} datapage={page} namepage={'table'}/>
            </LazyLoad>

        </div>
    );
}

export default Table;