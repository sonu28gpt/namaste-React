import { LOGO_URL } from "../utils/constant";

const Header=()=>{
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
                </ul>
            </div>

        </div>
    )
};

export default Header;