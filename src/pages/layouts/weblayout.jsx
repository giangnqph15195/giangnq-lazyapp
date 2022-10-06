import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { NavLink, Outlet, Routes } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { sreach } from '../../api/blog';
import Sreach from '../compoment/sreach';
import useDebounce from '../../hook/CustomHooks';

Weblayout.propTypes = {

};

function Weblayout(props) {
    const [keysreach,setkeysreach] = useState("")
    const [key, setkey] = useState("")
    function change(e) {
        const value = e.target.value
        setkey(value)   
    }
   
    const valueDebounce = useDebounce(key,3000)
    console.log(valueDebounce)
    return (
        <div >
            <div className="header">
                <div className="logo">
                    <img width={150} src="https://res.cloudinary.com/dkrifqhuk/image/upload/v1645017092/asm/footer_logo1_gvkbmr.png" alt="" />
                    <p>Pizza ngon - Giá rẻ - Vận chuyển tận nhà</p>
                </div>
                <div className="sreach">
               
            </div>
            </div>
            <div className="menu">
                <ul>
                    <li><NavLink className={'link'} to={'/'}>HOME PAGE</NavLink></li>
                    <li><NavLink className={'link'} to={'/blog'}>BLOG</NavLink></li>
                    <li><NavLink className={'link'} to={`/table/1`}>Table</NavLink></li>
                    <li><NavLink className={'link'} to={'/user/1'}>User</NavLink></li>
                </ul>
                <div className="info">
                    <span>Gọi điện ngay - Ship liền tay(24/7)</span> <br />
                    <span className='phone'>(024)36777888</span>
                </div>
            </div>
            <Outlet />
            <footer>
                <p className="text-footer">Công ty TNHH Pizza Express Việt Nam Số ĐKKD: 0106675108</p>
                <p className="text-footer">Địa Chỉ: Số 352 Đường Bưởi, P.Vĩnh Phúc, Q.Ba Đình, TP.Hà Nội</p>
                <p className="text-footer">Số điện thoại: 02436888777</p>
                <p className="text-footer">Email: lienhepizzaexpress@gmail.com</p>
            </footer>
        </div>
    );
}

export default Weblayout;