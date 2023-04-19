import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./PropertyListingPage.css";
import { GrAddCircle, GrSearch, GrDocumentImage, GrEdit, GrFormView } from 'react-icons/gr';
import axios from 'axios';
import { UsePropContext } from '../../StateManagement/PropertyContext';
import SingleProperty from './SingleProperty';
import Profile from './Profile';


function PropertyListingPage({ setShowForm }) {
    //fetch data
    const { setFormValues, propertyList, setPropertyList, showProperty, setShowProperty } = UsePropContext();
    const [showSingleProp, setShowSingleProp] = useState(false);
    const [singlePropData, setSinglePropData] = useState([]);
    const [images, setImages] = useState([]);
    const [showImageCard, setShowImageCard] = useState(false);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(0);

    const Previous = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1)
        }
    }
    const NextData = () => {
        if (currentPage < Math.floor(propertyList / 10)) {
            setCurrentPage(currentPage + 1)
        }
    }

    const getPropertyDetails = (e) => {
        let data = propertyList.filter((data) => {
            return data.ppdId === e.target.value
        })
        if (data.length >= 1) {
            setPropertyList(data)
        } else {
            console.log("hello")
            setPropertyList(showProperty)
        }

    };

    const navigate = useNavigate();

    let token = localStorage.getItem("token");
    let id = localStorage.getItem("userid");
    // eslint-disable-next-line
    useEffect(() => {
        //for render.com
        let url = "https://real-estate-app-zedu.onrender.com/api/users/property";
        //for local
        // let url = "http://localhost:8000/api/users/property";
        //for vercel
        // let url = "https://real-estate-backend-kohl.vercel.app/api/users/property"

        axios.get(url, {
            headers: {
                'token': token,
                'id': id,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        }).then((response) => {
            // console.log(response)
            if (response.statusText === 'Forbidden') {
                alert("Session over");
                navigate("/");
            } else {
                setPropertyList(response.data.property);
                setShowProperty(response.data.property);
                setLoading(false)
            }
        }).catch((err) => console.log(err));

    }, [id, navigate, token, setPropertyList, setShowProperty]);

    const showPropertyData = (id) => {
        let data = propertyList.filter((data) => {
            return data.ppdId === id
        });
        console.log(data)
        if (data.length) {
            setSinglePropData(data);
            setShowSingleProp(true);
        }
        console.log(singlePropData)
    };

    // url for images
    let url = "https://real-estate-app-zedu.onrender.com/";
    const showImages = (id) => {
        let data = propertyList.filter((data) => {
            return data.ppdId === id
        });
        // console.log(data[0].image)
        if (data.length > 0) {
            setImages(data[0].image);
            setShowImageCard(true)
        } else {
            setShowImageCard(false)
        }
        console.log(images)
    };

    const soldProperty = (saleid) => {
        // let url = `https://real-estate-app-zedu.onrender.com/api/users/property/sale/${saleid}`;
        let url = `http://localhost:8000/api/users/property/sale/${saleid}`;
        axios.patch(url, { status: "Sold", daysLeft: 0 }, {
            headers: {
                'token': token,
                'id': id,
            }
        })
            .then((res) => {
                if (res.data.status === "Success") {
                    navigate("/property")
                } else {
                    // console.log(res)
                    alert("Unable to update property, try again later")
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }

    const editProperty = (id) => {
        let data = propertyList.filter((data) => {
            return data.ppdId === id
        });
        if (data.length > 0) {
            setFormValues(data[0])
            setShowForm(true)
            console.log(data)
            // navigate("")
        }

    };

    return (
        <div id='listingPage' className='container-fluid'>
            <div className='d-flex justify-content-between flex-wrap'>
                <div className="input-group mb-3" id='searchPPD'>
                    <input type="text"
                        id='serchInput'
                        onChange={(e) => {
                            getPropertyDetails(e)
                        }}
                        className="form-control"
                        placeholder="Search"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2" />
                    <div className="input-group-append" id='searchbtn'>
                        <span className="input-group-text"
                            id="basic-addon2"
                            onClick={(e) => getPropertyDetails(e)}
                        ><GrSearch /></span>
                    </div>
                </div>
                <button
                    onClick={() => setShowForm(true)}
                    id='addPropbtn'
                    className="btn btn-primary btn-md d-flex align-items-center"
                    aria-disabled="true"><GrAddCircle /><span className='ml-2'>Add Property</span>
                </button>
            </div>
            {!showSingleProp &&
                <div id='data' className='mt-5 d-flex flex-nowrap align-items-center justify-content-center'>
                    {loading ? (<div id='loadProp'>Loading Properties <div id='loader'></div></div>) : (
                        <table className="table table-hover table-sm" id='dataTable'>
                            <thead>
                                <tr>
                                    <th scope="col">PPD ID</th>
                                    <th scope="col">Image</th>
                                    <th scope="col">Property</th>
                                    <th scope="col">Contact</th>
                                    <th scope="col">Area</th>
                                    <th scope="col">Views</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">Days Left</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {propertyList.slice((currentPage * 10), (currentPage * 10 + 10)).map((item, i) => {
                                    return <tr key={i}>
                                        <td>{item.ppdId}</td>
                                        <td><GrDocumentImage onClick={() => showImages(item.ppdId)} /></td>
                                        <td>{item.property}</td>
                                        <td>{item.mobile}</td>
                                        <td>{item.area}</td>
                                        <td>{item.views}</td>
                                        <td>
                                            <button className='btn btn-primary btn-sm'
                                                onClick={() => {
                                                    soldProperty(item._id)
                                                }}>{item.status}</button>
                                        </td>
                                        <td>{item.daysLeft}</td>
                                        <td className='d-flex flex-nowrap align-items-center justify-content-center'>
                                            <span className='mr-3 btn btn-primary btn-sm rounded-circle' onClick={() => {
                                                showPropertyData(item.ppdId);
                                            }}>
                                                <GrFormView id='viewData' />
                                            </span>
                                            <span className='btn btn-primary btn-sm rounded-circle' onClick={() => {
                                                editProperty(item.ppdId);
                                            }}><GrEdit id='editData' /></span>
                                        </td>
                                    </tr>
                                })}

                            </tbody>
                        </table>)}
                </div>}
            {showSingleProp && <SingleProperty singlePropData={singlePropData} setShowSingleProp={setShowSingleProp} />}
            {showImageCard && <div id='imageCards' onClick={() => setShowImageCard(false)}>
                {images.map((image, i) => {
                    return <img src={url + image.path} alt={image.originalname} key={i} className='fetchedimg' />
                })}

            </div>}

            <nav aria-label="Page navigation example">
                <ul className="pagination justify-content-center align-items-center">
                    <li className="page-item btn btn-primary btn-sm"><button className="page-link btn btn-primary" onClick={() => { Previous() }}>Previous</button></li>
                    <li className="page-item"><div className="page-link">{currentPage + 1}</div></li>
                    <li className="page-item btn btn-primary btn-sm"><button className="page-link btn btn-primary" onClick={() => { NextData() }}>Next</button></li>
                </ul>
            </nav>
        </div>
    )
}

export default PropertyListingPage