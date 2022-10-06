import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { sreach } from '../api/blog';
import LazyLoad from 'react-lazyload';
import Sreach from './compoment/sreach';
import 'date-fns'
import { Grid } from '@material-ui/core/Grid';
import { MuiPickersAdapter } from '@mui/x-date-pickers/internals'; 

function Home(props) {
    const { blogs } = props
    const [listposts, setlistposts] = useState([])
    const [key, setkey] = useState("")

    useEffect(() => {
        if (key) {
            const get = async () => {
                const { data } = await sreach(key)
                setlistposts(data)
            }
            get()
        } else {
            setlistposts(blogs)
        }
    }, [key])

    const hanle = (e) =>{
        const value = e.target.value
        console.log(value)
    }
    return (
        <div>
            <div className="banner">
                <img src="https://res.cloudinary.com/dkrifqhuk/image/upload/v1649810290/asm/tehslnbjnjcfnealfowm.png" alt="" />
            </div>
            <div className='list_blog'>
                <p>LIST BLOG</p>
                <Sreach setkey={setkey} blog={blogs}/>
            </div>
            {listposts.map((item) => {
                return (
                    <LazyLoad offset={[-30, 100]} debounce={150} placeholder={<div>Loading...</div >} >
                            <div className="posts">
                                <NavLink className='item_posts' to={`blog/${item.id}`}>
                                    <div className="title">
                                        <img src={`${item.image}`} alt="" />
                                        <h1>{item.title}</h1>
                                    </div>
                                </NavLink>
                                <p className='desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni architecto, excepturi quam dolore veniam non dolores iste aut animi repellat accusantium obcaecati fugit doloremque dicta vel debitis illo delectus explicabo.</p>
                                <NavLink to={`blog/${item.id}`}><button>Chi tiết</button></NavLink>
                            </div>
                            <input type='datetime-local' contentEditable="2022-10-03T14:17" about="2022-10-03T14:17"  onChange={hanle}/>
                    </LazyLoad>
                    

                )
            })}

        </div>
    );
}

export default Home;