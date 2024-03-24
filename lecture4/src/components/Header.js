import { useState } from "../../node_modules/react";
import { LOGO_URL } from "../utils/constant";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useContext } from "react";
import UserContext from '../utils/UserContext'
import { useSelector } from './../../node_modules/react-redux';

const Header=()=>{
    const [btnValue,setbtnValue]=useState('log In');
    const onlineStatus=useOnlineStatus();
    const {loggedInUser}=useContext(UserContext);
    const cartItems=useSelector((store)=>store.cart.items);
    // console.log(cartItems);
    return(
        <div id="header" className="flex justify-between items-center bg-pink-300 shadow-lg">
            <div id="logo" className="">
                <img  className="w-24" src={LOGO_URL}/>
            </div>
            <div className="mx-2 ">
                <ul className="flex">
                    <li>Online Status:{onlineStatus?"✅":"🔴"}</li>
                    <Link to="/">    <li className="px-4">Home</li></Link>
                    <Link to="/about">    <li className="px-4">About Us</li></Link>
                    <Link to="/contact">    <li className="px-4">Contact Us</li></Link>
                    <Link to="/cart">    <li className="px-4">Cart({cartItems.length}items)</li></Link>
                    <Link to="/grocery">    <li className="px-4">Grocery</li></Link>
                    <Link to="/loginPage">    <li className="px-4">log In</li></Link>
                    <button className="border-[2px] border-solid px-2 border-black" onClick={()=>{

                        (btnValue==='log In')?setbtnValue('log Out'):setbtnValue('log In');
                    }
                    }>{btnValue}</button>
                    <li className="font-bold m-2 truncate ">{loggedInUser}</li>

                </ul>
            </div>

        </div>
    )
};

export default Header;