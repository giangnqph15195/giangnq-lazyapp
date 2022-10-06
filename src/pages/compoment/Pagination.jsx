import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { NavLink, useParams } from 'react-router-dom'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

function Pagination({ setdata, datapage, namepage }) {
    const [pages, setpages] = useState([])
    const [countpage, setcounpage] = useState(1)
    const { id } = useParams()

    let arrayPage = []
    useEffect(() => {
        const getuser = async () => {
            for (let i = 1; i <= 2; i++) {
                arrayPage.push(i)
            }
            setpages(arrayPage)
        }
        getuser()
    }, [])
    const onclickchange = async (index) => {
        if (index === 1) {
            setcounpage(index - 1)
        } else {
            setcounpage(index + 1)
        }

        const { data } = await axios.get(`https://reqres.in/api/users?page=${index + 1}`)
        setdata(data.data)
    }
    return (
        <div>
            <button disabled={id === "id"} >
                <NavLink disabled={id === "1"} onClick={() => { setcounpage(countpage - 1); onclickchange(countpage) }} to={`/${namepage}/${countpage}`}>
                    <FaChevronLeft />
                </NavLink>
            </button>
            {
                pages.map((page, index) => (
                    <button key={index} onClick={() => onclickchange(index)} className='bg-orange-600 px-[8px] ml-[5px] text-white rounded-full'>
                        <NavLink to={`/${namepage}/${index + 1}`}>{page}</NavLink>
                    </button>
                ))
            }
            <button disabled={id === "2"} onClick={() => { setcounpage(countpage + 1); onclickchange(countpage) }}><NavLink to={`/${namepage}/${countpage + 1}`}><FaChevronRight /></NavLink></button>
        </div>
    )
}

export default Pagination
