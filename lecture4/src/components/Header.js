import { useState } from "../../node_modules/react";
import { LOGO_URL } from "../utils/constant";

const Header=()=>{
    const [btnValue,setbtnValue]=useState('log In');

    return(
        <div id="header">
            <div id="logo">
                <img src={LOGO_URL}/>
            </div>
            <div className="nav-items">
                <ul>
                    <li className="nav-item">Home</li>
                    <li className="nav-item">About Us</li>
                    <li className="nav-item">Contact Us</li>
                    <li className="nav-item">Cart</li>
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