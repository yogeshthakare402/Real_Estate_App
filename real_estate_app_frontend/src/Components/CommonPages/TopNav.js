import React from 'react';
import { useNavigate } from 'react-router-dom';

function TopNav() {
    let userName = localStorage.getItem("name");
    let userId = localStorage.getItem("userid");
    // console.log(userId)

    let navigate = useNavigate()

    return (
        <nav className="navbar navbar-expand-xl navbar-light bg-dark rounded" id='topNav'>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto d-flex flex-row align-items-center justify-content-between" style={{ width: "100%" }}>
                    <li className="nav-item">
                        <div className="nav-item text-dark" >USER ID : <span className="nav-item">{userId}</span></div>
                    </li>
                    <li className="nav-item dropdown">
                        <div className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            {userName}
                        </div>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" href="/profile">Profile</a>
                            <div className="dropdown-divider"></div>
                            <button className="dropdown-item" onClick={()=>{
                                localStorage.removeItem("name");
                                localStorage.removeItem("email");
                                localStorage.removeItem("userid");
                                localStorage.removeItem("token");
                                navigate("/");
                            }}>Logout</button>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default TopNav