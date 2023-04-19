import React from 'react';
import './CommonPages.css'
import {AiFillHome,AiFillBell,AiFillEye,AiFillTag} from 'react-icons/ai';
import {GiReceiveMoney} from 'react-icons/gi';
import {TbArrowBarUp} from 'react-icons/tb';

function SideNav() {
    return (
        <div id='sideNav' className='navbar-fluid d-flex flex-column align-items-center justify-content-start'>
            <img className="logo" alt="logo"
                style={{ maxHeight: "50px", maxWidth: "60px" }}
                src="https://cdn5.vectorstock.com/i/1000x1000/45/29/house-gold-leaf-logo-vector-14984529.jpg"
            />
            <div className='container-fluid mt-md-5'>
                <ul className="nav nav-dark flex-column" >
                    <li className="nav-item">
                        <a className="nav-link active d-flex flex-row align-items-center" href="/propertyListingPage">
                            <span className='mr-3'><AiFillHome/></span>
                            <span className='ms-1 d-none d-sm-inline'>Property</span>
                        </a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link text-white d-flex flex-row align-items-center" href="/propertyListingPage">
                            <span className='mr-3'><AiFillBell/></span>
                            <span className='ms-1 d-none d-sm-inline'>PPD Assistance</span>
                        </a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link text-white d-flex flex-row align-items-center" href="/propertyListingPage">
                            <span className='mr-3'><GiReceiveMoney/></span>
                            <span className='ms-1 d-none d-sm-inline'>Received Interest</span>
                        </a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link text-white d-flex flex-row align-items-center" href="/propertyListingPage">
                            <span className='mr-3'><TbArrowBarUp/></span>
                            <span className='ms-1 d-none d-sm-inline'>Sent Interest</span>
                        </a>
                    </li>
                    
                    <li className="nav-item">
                    <a className="nav-link text-white d-flex flex-row align-items-center" href="/propertyListingPage">
                            <span className='mr-3'><AiFillEye/></span>
                            <span className='ms-1 d-none d-sm-inline'>Property Views</span>
                        </a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link text-white d-flex flex-row align-items-center" href="/propertyListingPage">
                            <span className='mr-3'><AiFillTag/></span>
                            <span className='ms-1 d-none d-sm-inline'>Tariff Plans</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default SideNav