import React,{useState} from 'react';
import './CommonPages.css';
import SideNav from './SideNav';
import TopNav from './TopNav';
import PropertyListingPage from '../PropertyListingPages/PropertyListingPage';
import AddProperty from '../AddPropertyForms/AddProperty';

function CommonPage() {
    const [showForm,setShowForm] = useState(false);
    return (
        <div className="container-fluid d-flex flex-row p-0" style={{ width: "100vw", height: "100vh" }}>
            <SideNav />
            <div className='container-fluid p-1 m-0' id='dataContainer'>
                <TopNav />
                <div className="dropdown-divider"></div>
                <div>
                    {!showForm ? <PropertyListingPage setShowForm={setShowForm}/>:<AddProperty setShowForm={setShowForm}/>}
                </div>
            </div>

        </div>
    )
}

export default CommonPage