import { useState } from "../../node_modules/react";
import { LOGO_URL } from "../utils/constant";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";


const Header=()=>{
    const [btnValue,setbtnValue]=useState('log In');
    const onlineStatus=useOnlineStatus();

    return(
        <div id="header">
            <div id="logo">
                <img src={LOGO_URL}/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Online Status:{onlineStatus?"✅":"🔴"}</li>
                    <Link to="/">    <li className="nav-item">Home</li></Link>
                    <Link to="/about">    <li className="nav-item">About Us</li></Link>
                    <Link to="/contact">    <li className="nav-item">Contact Us</li></Link>
                    <Link to="/grocery">    <li className="nav-item">Grocery</li></Link>
                    <Link to="">    <li className="nav-item">Cart</li></Link>
                    {/* <Link to="/loginPage">    <li className="nav-item">log In</li></Link> */}
                    <button className="log-btn" onClick={()=>{

                        (btnValue==='log In')?setbtnValue('log Out'):setbtnValue('log In');
                    }
                    }>{btnValue}</button>
                </ul>
            </div>

        </div>
    )
};

export default Header;