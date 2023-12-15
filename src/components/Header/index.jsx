import '../../utils/style/header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle, faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getToken } from "../../features/Token/token";
import { getLoginFetch } from "../../services/api";
import { getUserName } from "../../features/User/userName";
import { NavLink } from "react-router-dom";
import logo from "../../assets/argentBankLogo.webp"


function Header() {

    const userName = useSelector((state) => state.userName.value);
    const token = useSelector((state) => state.token.value);


    const dispatch = useDispatch();
    useEffect(() => {
        if(token === localStorage.getItem("token")) {
            dispatch(getToken(localStorage.getItem("token")));
            const user = getLoginFetch(token);
            user.then(obj => {
                dispatch(getUserName(obj.userName));
            });
        }
    });

    return (
        <nav className="main-nav">
            <NavLink to="/" className="main-nav-logo">
                <img className="main-nav-logo-image" src={logo} alt="Argent Bank Logo" />
                <h1 className="sr-only">Argent Bank</h1>
            </NavLink>
            <div className='link-div'>
                
                { 
                    token === 0 &&
                    <>
                        <NavLink to="/login" className="main-nav-item">
                            <div className="link">
                                <FontAwesomeIcon icon={faUserCircle} />
                                Sign In
                            </div>
                        </NavLink>
                    </>
                }
                
                
                {
                    token !== 0 &&
                    <>
                        <NavLink to="/profil" className="main-nav-item">
                            <div className="link">
                                <FontAwesomeIcon icon={faUserCircle} />
                                {userName}
                            </div>
                        </NavLink>
                        <NavLink to="/logout" className="main-nav-item">
                            <div className="link">
                                <FontAwesomeIcon icon={faRightFromBracket} />
                                Sign Out
                            </div>
                        </NavLink>
                    </>
                }
            </div>
        </nav>
    );
}

export default Header;

<FontAwesomeIcon icon={faUserCircle} />