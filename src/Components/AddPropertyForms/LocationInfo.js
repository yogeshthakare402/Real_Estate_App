import React from 'react';
import { UsePropContext } from '../../StateManagement/PropertyContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function LocationInfo({ setTrack, setShowForm }) {
  const { formValues, setFormValues, insertImages } = UsePropContext();
  let navigate = useNavigate();

  const submitFormData = async (e) => {
    e.preventDefault();
    // console.log(formValues);
    // console.log(insertImages);

    let token = localStorage.getItem("token");
    let id = localStorage.getItem("userid");

    //for render.com
    // let url =  `https://real-estate-app-zedu.onrender.com/api/users/property`;

    //for local
    // let url = "http://localhost:8000/api/users/property";

    //for vercel
    // let url = "https://real-estate-backend-kohl.vercel.app/api/users/property";

    if (formValues.ppdId) {
      //For render.com
      let url = `https://real-estate-app-zedu.onrender.com/api/users/property/${formValues._id}`;
      //for local use
      // let url = `http://localhost:8000/api/users/property/${formValues._id}`;

      axios.patch(url, formValues, {
        headers: {
          'token': token,
          'id': id,
        }
      })
        .then((res) => {
          if (res.data.status === "Success") {
            navigate("/property")
            setShowForm(false)
          } else {
            // console.log(res)
            alert("Unable to update property, try again later")
          }
        })
        .catch((err) => {
          console.log("this is error");
          console.log(err);
          if(err.response.status === 403){
            alert(" OOOPs! Session Expired")
            navigate('/')
          }
        });
    } else {
      // Add new property
      let formData = new FormData();

      let key = Object.keys(formValues);
      let value = Object.values(formValues);

      for (let i = 0; i < key.length; i++) {
        formData.append(key[i], value[i]);
      }

      Array.from(insertImages).forEach((image) => {
        formData.append("imgfiles", image)
        // console.log(image)
      })

      // for (let key of formData.entries()) {
      //     console.log(key)
      //   }

      //For render.com
      let url = `https://real-estate-app-zedu.onrender.com/api/users/property`;
      //for Local use
      // let url = `http://localhost:8000/api/users/property`;

      axios.post(url, formData,{
        headers: {
          'token': token,
          'id': id,
        }
      })
        .then((res) => {
          if (res.data.status === "Success") {
            navigate("/property");
            setShowForm(false);
          } else {
            alert("Unable to add property, try again later")
          }
        })
        .catch((err) => {
          // console.log("this is error");
          // console.log(err);
          if(err.response.status === 403){
            alert(" OOOPs! Session Expired")
            navigate('/')
          }
        });
    }

  };

  const checkRequiredValues = ()=>{
    if(formValues.email && formValues.address){
      return true
    }else{
      return false
    }
  }

  return (
    <div>
      <form method='POST' action='#'>
        <div id='formData' className="form-row d-flex align-items-center justify-content-center">
          <div className="col-md-5 mb-3">
            <label htmlFor="email">Email</label>
            <input type="email"
              value={formValues.email}
              onChange={(e) => setFormValues({ ...formValues, email: e.target.value })}
              name="email"
              className="form-control is-valid"
              id="email"
              placeholder="Email" required />
          </div>

          <div className="col-md-5 mb-3">
            <label htmlFor="city">City</label>
            <input type="text"
              value={formValues.city}
              onChange={(e) => setFormValues({ ...formValues, city: e.target.value })}
              name="city"
              className="form-control is-valid"
              id="city"
              placeholder="City" />
          </div>

          <div className="col-md-5 mb-3">
            <label htmlFor="area">Area</label>
            <input type="text"
              name="addArea"
              value={formValues.addArea}
              onChange={(e) => setFormValues({ ...formValues, addArea: e.target.value })}
              className="form-control is-valid"
              id="area"
              placeholder="Area you stay" />
          </div>

          <div className="col-md-5 mb-3">
            <label htmlFor="pincode">Pincode</label>
            <input type="text"
              name="pincode"
              value={formValues.pincode}
              onChange={(e) => setFormValues({ ...formValues, pincode: e.target.value })}
              className="form-control is-valid"
              id="pincode"
              placeholder="Pincode" />
          </div>

          <div className="col-md-5 mb-3">
            <label htmlFor="address">Address</label>
            <input type="text"
              name="address"
              value={formValues.address}
              onChange={(e) => setFormValues({ ...formValues, address: e.target.value })}
              className="form-control is-valid"
              id="address"
              placeholder="Address" />
          </div>

          <div className="col-md-5 mb-3">
            <label htmlFor="landmark">Landmark</label>
            <input type="text"
              name="landmark"
              value={formValues.landmark}
              onChange={(e) => setFormValues({ ...formValues, landmark: e.target.value })}
              className="form-control is-valid"
              id="landmark"
              placeholder="Landmark" />
          </div>

          <div className="col-md-5 mb-3">
            <label htmlFor="latitude">Latitude</label>
            <input type="text"
              name="latitude"
              value={formValues.latitude}
              onChange={(e) => setFormValues({ ...formValues, latitude: e.target.value })}
              className="form-control is-valid"
              id="latitude"
              placeholder="Latitude" />
          </div>

          <div className="col-md-5 mb-3">
            <label htmlFor="longitude">Longitude</label>
            <input type="text"
              name="longitude"
              value={formValues.longitude}
              onChange={(e) => setFormValues({ ...formValues, longitude: e.target.value })}
              className="form-control is-valid"
              id="longitude"
              placeholder="Longitude" />
          </div>

          <div className="col-md-5 mb-3">
            <button className='btn btn-danger cancelBtn' onClick={() => setTrack(3)}>Cancel</button>
          </div>
          <div className="col-md-5 mb-3">
            <button type='submit' className='btn btn-success saveBtn' onClick={(e) => {
              let check = checkRequiredValues();
              if(check){
                submitFormData(e);
              }else{
                alert("Please fill the specific data")
              }
            }}>Save & Continue</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default LocationInfo