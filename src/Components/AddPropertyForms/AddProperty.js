import React, { useState } from 'react';
import './AddProperty.css';
// import CommonPage from '../CommonPages/CommonPage';
import Progress from './Progress';
import BasicInfo from './BasicInfo';
import PropertyDetails from './PropertyDetails';
import GeneralInfo from './GeneralInfo';
import LocationInfo from './LocationInfo';

function AddProperty({setShowForm}) {
  const [track,setTrack] = useState(1);
  // console.log("I am added")

  return (
    <>
      <Progress track={track}/>
      <div id='form' className='container-fluid' style={{maxWidth:"820px", maxHeight:"550px"}}>
        {(track===1)?<BasicInfo setShowForm={setShowForm} setTrack={setTrack}/>:(track===2)?<PropertyDetails setTrack={setTrack}/>:(track===3)?<GeneralInfo setTrack={setTrack}/>:(track===4)?<LocationInfo setTrack={setTrack} setShowForm={setShowForm}/>:<BasicInfo setShowForm={setShowForm} setTrack={setTrack}/>}
      </div>
    </>
  )
}

export default AddProperty