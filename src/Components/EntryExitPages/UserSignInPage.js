import React, { useState } from 'react';
import './EntryExitPages.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { MdEmail, MdPassword } from 'react-icons/md';
import { AiFillEyeInvisible, AiOutlineEye } from 'react-icons/ai';
// import { UsePropContext } from '../../StateManagement/PropertyContext';

function UserSignInPage() {
    const [showPass, setShowPass] = useState(false);
    const [userData, setUserData] = useState({
        userName: "",
        password: ""
    });
    const [errorMessage, setErrorMessage] = useState(false)
    let navigate = useNavigate();

    const setValues = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value });
    }

    const checkAndCreate = async (e) => {
        e.preventDefault()
        const { userName, password } = userData;
        // console.log(userData)
        //for render.com
        let url = "https://real-estate-app-zedu.onrender.com/api/users/login";
        //for local
        // let url = "http://localhost:8000/api/users/login"
        //for vercel
        // let url = "https://real-estate-backend-kohl.vercel.app/api/users/login"

        if (userName.length > 0 && password.length > 0) {
            axios.post(url, {
                email: userName,
                password: password,
            }).then((res) => {
                console.log(res.data)
                localStorage.setItem("token", res.data.token);
                localStorage.setItem("userid", res.data.details.userid);
                localStorage.setItem("name", res.data.details.name);
                localStorage.setItem("email", res.data.details.email);
                navigate("/property");
            }).catch((err) => {
                alert(err.message);
                console.log(err)
            });
        }else{
            // alert("Please Enter correct details")
            setErrorMessage(true)
        }
    }

    return (
        <div className="card signIn m-10" style={{ width: "20rem", height: "25rem" }}>
            <img className="logo" alt="logo"
                style={{ maxHeight: "50px", maxWidth: "60px" }}
                src="https://cdn5.vectorstock.com/i/1000x1000/45/29/house-gold-leaf-logo-vector-14984529.jpg"
            />

            <h6 className='card-text mt-3'>Enter your credentials</h6>

            {errorMessage && <p className='card-text text-danger'>Please Enter correct details</p>}

            <form className='card-body d-flex flex-column justify-content-around' onSubmit={(e) => checkAndCreate(e)}>
                <div className="form-group">
                    <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="basic-addon1">
                                <MdEmail />
                            </span>
                        </div>
                        <input
                            type="email"
                            name='userName'
                            value={userData.userName}
                            className="form-control"
                            placeholder="Email"
                            aria-label="Email"
                            aria-describedby="basic-addon1"
                            onChange={(e) => { setValues(e) }}
                            required
                        />
                    </div>
                </div>
                <div className="form-group">
                    <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="basic-addon1">
                                <MdPassword />
                            </span>
                        </div>
                        {showPass ? (
                            <input
                                type="text"
                                name='password'
                                value={userData.password}
                                className="form-control"
                                placeholder="Password"
                                aria-label="Password"
                                aria-describedby="basic-addon2"
                                onChange={(e) => { setValues(e) }}
                                required
                            />
                        ) : (
                            <input
                                type="password"
                                name='password'
                                value={userData.password}
                                className="form-control"
                                placeholder="Password"
                                aria-label="Password"
                                aria-describedby="basic-addon2"
                                onChange={(e) => { setValues(e) }}
                            />
                        )}
                        <div className="input-group-append">
                            <span className="input-group-text" id="ic-addbason2" onClick={() => setShowPass(!showPass)}>
                                {!showPass ? <AiFillEyeInvisible /> : <AiOutlineEye />}
                            </span>

                        </div>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Sign In</button>
            </form>
            <a className='card-footer' href="/signUp" style={{ width: "100%" }}>Sign up</a>
        </div>
    )
}

export default UserSignInPage