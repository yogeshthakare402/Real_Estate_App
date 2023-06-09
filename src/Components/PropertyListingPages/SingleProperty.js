import React, { useState } from 'react';
import './PropertyListingPage.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function SingleProperty({ singlePropData, setShowSingleProp }) {
    console.log(singlePropData[0]);
    const [page, setPage] = useState(1)
    let navigate = useNavigate()
    const returnBack = () => {
        setShowSingleProp(false)
    }

    let token = localStorage.getItem("token");
    let id = localStorage.getItem("userid");

    const deleteProperty = ()=>{
        let deleteId = singlePropData[0]._id;
        console.log(deleteId);
        //For Render.com
        let url = `https://real-estate-app-zedu.onrender.com/api/users/property/delete/${deleteId}`;
        //url for local
        // let url = `http://localhost:8000/api/users/property/delete/${deleteId}`;
        
        axios.delete(url,{
            headers: {
                'token': token,
                'id': id,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then((res) => {
                if (res.data.status === "Success") {
                    setShowSingleProp(false)
                } else if(res.statusText === "Forbidden"){
                    alert("Session Over Please login Again")
                    navigate("/");
                }else if(res.data.status === "Failed"){
                    alert("Unable to delete property, try again later")
                    setShowSingleProp(false)
                }
            })
            .catch((err) => {
                console.log(err);
                if(err.response.status === 403){
                    alert(" OOOPs! Session Expired")
                    navigate('/')
                }
            });
    }
   

    return (
        <div id='singlePropData' className='container-fluid card bg-info'>
            <div id='stickyHead'>
                <button id='dataDelete' className='btn btn-danger' onClick={deleteProperty}>Delete</button>
                <h2>Selected Property Data</h2>
                <button id='dataCancle' className='btn btn-danger' onClick={returnBack}>X</button>
            </div>
            <hr />

            <div>
                {page === 1 &&
                    <div className='singleDataCard'>
                        <h3>Basic Info</h3>
                        <div>
                            <div className='singleData'>
                                <label htmlFor="propType">Property Type :- </label>
                                <span>{singlePropData[0].property}</span>
                            </div>
                            <div className='singleData'>
                                <label htmlFor="negotiable">Negotiable :- </label>
                                <span>{singlePropData[0].negotiable}</span>
                            </div>
                            <div className='singleData'>
                                <label htmlFor="">Property Price :- </label>
                                <span>{singlePropData[0].price}</span>
                            </div>
                            <div className='singleData'>
                                <label htmlFor="">Property Ownership :- </label>
                                <span>{singlePropData[0].ownership}</span>
                            </div>
                            <div className='singleData'>
                                <label htmlFor="">Property Age :- </label>
                                <span>{singlePropData[0].propertyAge}</span>
                            </div>
                            <div className='singleData'>
                                <label htmlFor="">Property Approved :-</label>
                                <span>{singlePropData[0].propApproved}</span>
                            </div>
                            <div className='singleData description'>
                                <label htmlFor="">Property Description :- </label>
                                <span>{singlePropData[0].propDescription}</span>
                            </div>
                            <div className='singleData'>
                                <label htmlFor="">Bank Loan :- </label>
                                <span>{singlePropData[0].bankLoan}</span>
                            </div>
                        </div>

                    </div>}
                {page === 2 &&
                    <div>
                        <h3>Property Details</h3>
                        <div className='singleDataCard'>
                            <div className='singleData'>
                                <label htmlFor="">Property Length :- </label>
                                <span>{singlePropData[0].length}</span>
                            </div>
                            <div className='singleData'>
                                <label htmlFor="">Property Bredth :- </label>
                                <span>{singlePropData[0].breadth}</span>
                            </div>
                            <div className='singleData'>
                                <label htmlFor="">Total Area :- </label>
                                <span>{singlePropData[0].area + " " + singlePropData[0].areaUnit}</span>
                            </div>
                            <div className='singleData'>
                                <label htmlFor="">No of BHK :- </label>
                                <span>{singlePropData[0].bhk}</span>
                            </div>
                            <div className='singleData'>
                                <label htmlFor="">Attached :- </label>
                                <span>{singlePropData[0].attached}</span>
                            </div>
                            <div className='singleData'>
                                <label htmlFor="">Western Toilet :- </label>
                                <span>{singlePropData[0].westToilet}</span>
                            </div>
                            <div className='singleData'>
                                <label htmlFor="">Furnished :- </label>
                                <span>{singlePropData[0].furnished}</span>
                            </div>
                            <div className='singleData'>
                                <label htmlFor="">Car Parking :- </label>
                                <span>{singlePropData[0].parking}</span>
                            </div>
                            <div className='singleData'>
                                <label htmlFor="">Lift :- </label>
                                <span>{singlePropData[0].lift}</span>
                            </div>
                            <div className='singleData'>
                                <label htmlFor="">Electricity :- </label>
                                <span>{singlePropData[0].electricity}</span>
                            </div>
                            <div className='singleData'>
                                <label htmlFor="">Property Facing :- </label>
                                <span>{singlePropData[0].facing}</span>
                            </div>
                            <div className='singleData'></div>

                        </div>
                    </div>}
                {page === 3 &&
                    <div>
                        <h3>General Info</h3>
                        <div className='singleDataCard'>
                            <div className='singleData'>
                                <label htmlFor="">Owner Name :- </label>
                                <span>{singlePropData[0].name}</span>
                            </div>
                            <div className='singleData'>
                                <label htmlFor="">Mobile No. :- </label>
                                <span>{singlePropData[0].mobile}</span>
                            </div>
                            <div className='singleData'>
                                <label htmlFor="">Posted By :- </label>
                                <span>{singlePropData[0].postedBy}</span>
                            </div>
                            <div className='singleData'>
                                <label htmlFor="">Sale Type :- </label>
                                <span>{singlePropData[0].saleType}</span>
                            </div>
                            <div className='singleData'>
                                <label htmlFor="">Featured Package :- </label>
                                <span>{singlePropData[0].package}</span>
                            </div>
                            <div className='singleData'>
                                <label htmlFor="">PPD Package :- </label>
                                <span>{singlePropData[0].ppdPackage}</span>
                            </div>
                        </div>
                    </div>}
                {page === 4 &&
                    <div>
                        <h3>Location Info</h3>
                        <div className='singleDataCard'>
                            <div className='singleData'>
                                <label htmlFor="">Email Id :- </label>
                                <span>{singlePropData[0].userid}</span>
                            </div>
                            <div className='singleData'>
                                <label htmlFor="">City :- </label>
                                <span>{singlePropData[0].city}</span>
                            </div>
                            <div className='singleData'>
                                <label htmlFor="">Area :- </label>
                                <span>{singlePropData[0].addArea}</span>
                            </div>
                            <div className='singleData'>
                                <label htmlFor="">Pincode :- </label>
                                <span>{singlePropData[0].pincode}</span>
                            </div>
                            <div className='singleData' id='address'>
                                <label htmlFor="" className='mb-0'>Address :- </label>
                                <span className='d-inline-flex flex-wrap'>{singlePropData[0].address}</span>
                            </div>
                            <div className='singleData' id='landmark'>
                                <label htmlFor="" className='mt-1'>Landmark :- </label>
                                <span>{singlePropData[0].landmark}</span>
                            </div>
                            <div className='singleData'>
                                <label htmlFor="">Lattitude :- </label>
                                <span>{singlePropData[0].lattitude}</span>
                            </div>
                            <div className='singleData'>
                                <label htmlFor="">Longitude :- </label>
                                <span>{singlePropData[0].longitude}</span>
                            </div>
                        </div>
                    </div>}
            </div>

            <nav aria-label="Page navigation example">
                <ul className="pagination">
                    <li className="page-item"><button className="page-link" onClick={() => setPage(1)}>1</button></li>
                    <li className="page-item"><button className="page-link" onClick={() => setPage(2)}>2</button></li>
                    <li className="page-item"><button className="page-link" onClick={() => setPage(3)}>3</button></li>
                    <li className="page-item"><button className="page-link" onClick={() => setPage(4)}>4</button></li>
                </ul>
            </nav>
        </div >
    )
}

export default SingleProperty