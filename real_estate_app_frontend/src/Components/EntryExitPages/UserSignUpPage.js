import React, { useState } from 'react';
import './EntryExitPages.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { MdEmail, MdPassword } from 'react-icons/md';
import { AiFillEyeInvisible, AiOutlineEye } from 'react-icons/ai';
import { useForm } from 'react-hook-form';

function UserSignUpPage() {
    const [showPass, setShowPass] = useState(true);
    const [confrimshowPass, setConfrimShowPass] = useState(true);
    const [userData, setUserData] = useState({
        email: "",
        password: "",
        confirmPassword: ""
    });
    let navigate = useNavigate();

    const { register, handleSubmit, getValues, formState: { errors } } = useForm();

    const showPassword = () => {
        let pass = document.getElementById("password")
        if (pass.type === "password") {
            pass.type = "text"
        } else {
            pass.type = "password"
        }
        setShowPass(!showPass)
    }
    const showConfiPassword = () => {
        let pass = document.getElementById("confirmPass")
        if (pass.type === "password") {
            pass.type = "text"
        } else {
            pass.type = "password"
        }
        setConfrimShowPass(!confrimshowPass)
    }

    const setValues = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value });
    }


    const checkAndCreate = (e) => {
        console.log(userData)
        let userName = userData.email.split("@")[0];

        //for render.com
        // let url = "https://real-estate-app-zedu.onrender.com/api/users/signup";
        // for local
        // let url = "http://localhost:8000/api/users/signup";
        // for vercel
        let url = "https://real-estate-backend-kohl.vercel.app/api/users/signup";

        axios.post(url, {
            username: userName,
            email: userData.email,
            password: userData.password,
        })
            .then((res) => navigate("/"))
            .catch((err) => console.log(err));
    }

    return (
        <div className="card signIn m-10 py-20" style={{ width: "20rem" }}>
            <img className="logo" alt="logo"
                style={{ maxHeight: "50px", maxWidth: "60px" }}
                src="https://cdn5.vectorstock.com/i/1000x1000/45/29/house-gold-leaf-logo-vector-14984529.jpg"
            />

            <h6 className='card-text mt-3'>Enter your credentials</h6>

            <form className='card-body d-flex flex-column justify-content-around' onSubmit={handleSubmit(checkAndCreate())}>

                <div className="form-group">
                    <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="basic-addon1">
                                <MdEmail />
                            </span>
                        </div>
                        <input
                            type="email"
                            name='email'
                            value={userData.email}
                            {...register("email", {
                                required: "Please Enter Your Email!",
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: "Please Enter A Valid Email!",
                                }
                            })}
                            className="form-control"
                            placeholder="Email"
                            aria-label="Email"
                            aria-describedby="basic-addon1"
                            onChange={(e) => { setValues(e) }}
                        />
                    </div>
                    {errors.email ? (<small id="emailHelp" className="form-text text-sm text-danger">{errors.email.message}</small>) : ""}
                </div>

                <div className="form-group">
                    <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="basic-addon1">
                                <MdPassword />
                            </span>
                        </div>
                        <input
                            type="password"
                            name='password'
                            value={userData.password}
                            {...register("password", {
                                required: "Please enter password",
                                minLength: {
                                    value: 6,
                                    message: "Password should have atleast 6 charecter"
                                }
                            })}
                            id='password'
                            className="form-control"
                            placeholder="Password"
                            aria-label="Password"
                            aria-describedby="basic-addon2"
                            onChange={(e) => { setValues(e) }}
                        />
                        <div className="input-group-append">
                            <span className="input-group-text" id="ic-addbason1" onClick={() => showPassword()}>
                                {showPass ? <AiFillEyeInvisible /> : <AiOutlineEye />}
                            </span>
                        </div>
                    </div>
                    {errors.password ? <small id="passHelp1" className="form-text text-sm text-danger">{errors.password.message}</small> : ""}
                </div>

                <div className="form-group">
                    <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="basic-addon1">
                                <MdPassword />
                            </span>
                        </div>
                        <input
                            type="password"
                            name='confirmPassword'
                            value={userData.confirmPassword}
                            {...register("confirmPassword",
                                {
                                    required: "Please confirm password",
                                    validate: (match) => {
                                        let pass = getValues("password")
                                        return match === pass || "Password should match!"
                                    }
                                }
                            )}
                            id='confirmPass'
                            className="form-control"
                            placeholder="Confirm Password"
                            aria-label="Password"
                            aria-describedby="basic-addon2"
                            onChange={(e) => { setValues(e) }}
                        />

                        <div className="input-group-append">
                            <span className="input-group-text" id="ic-addbason2" onClick={() => showConfiPassword()}>
                                {confrimshowPass ? <AiFillEyeInvisible /> : <AiOutlineEye />}
                            </span>

                        </div>
                    </div>
                    {errors.confirmPassword ? <small id="passHelp2" className="form-text text-sm text-danger">{errors.confirmPassword.message}</small> : ""}
                </div>
                <button type="submit" className="btn btn-primary">Sign Up</button>
            </form>
            <a className='card-footer' href="/" style={{ width: "100%" }}>Sign In</a>
        </div>
    )
}

export default UserSignUpPage