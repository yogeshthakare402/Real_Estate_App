import React from 'react';
import {AiOutlineCamera} from 'react-icons/ai';
import { UsePropContext } from '../../StateManagement/PropertyContext';


function GeneralInfo({ setTrack }) {
  const {formValues, setFormValues,setInsertImages} = UsePropContext();
  console.log(formValues)
  const addImage = e => {
    console.log(e.target.files)
    setInsertImages(e.target.files)
}

const checkRequiredValues = ()=>{
  if(formValues.name && formValues.mobile){
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
            <label htmlFor="owner">Owner Name</label>
            <input type="text" 
            name='name'
            value={formValues.name}
            onChange={(e)=>setFormValues({...formValues,name:e.target.value})}
            className="form-control is-valid" 
            id="name" 
            placeholder="Owner Name" required/>
          </div>

          <div className="col-md-5 mb-3">
            <label htmlFor="mobile">Mobile</label>
            <input type="text" 
            name='mobile'
            value={formValues.mobile}
            onChange={(e)=>setFormValues({...formValues,mobile:e.target.value})} 
            className="form-control is-valid" 
            id="mobile" 
            placeholder="Enter Mobile Number" required={true}/>
          </div>

          <div className="col-md-5 mb-3">
            <label htmlFor="postedBy">Posted By</label>
            <select id='postedBy'
            value={formValues.postedBy}
            onChange={(e)=>setFormValues({...formValues,postedBy:e.target.value})}
            name='postedBy' 
            className="form-control custom-select">
              <option value="#">Posted By</option>
              <option value="owner">Owner</option>
              <option value="broker">Broker</option>
            </select>
          </div>

          <div className="col-md-5 mb-3">
            <label htmlFor="sale">Sale Type</label>
            <select id='saleType'
            value={formValues.saleType}
            onChange={(e)=>setFormValues({...formValues,saleType:e.target.value})}
            name='saleType' 
            className="form-control custom-select">
              <option value="#">Please Select</option>
              <option value="sought">Offers being sought</option>
              <option value="negotiation">Sale by negotiation</option>
              <option value="asking">Asking price given</option>
              <option value="Tender">Tender</option>
              <option value="enquiry">Buyer Enquiry Over $</option>
              <option value="auctionOwner">Auction (by owner)</option>
              <option value="auction">Auction (mortgagee sale)</option>
            </select>
          </div>

          <div className="col-md-5 mb-3">
            <label htmlFor="package">Featured Package</label>
            <input type="text" 
            name='package'
            value={formValues.package}
            onChange={(e)=>setFormValues({...formValues,package:e.target.value})}
            className="form-control is-valid" 
            id="package" 
            placeholder="Enter Featured Package" />
          </div>

          <div className="col-md-5 mb-3">
            <label htmlFor="ppdPackage">PPD Package</label>
            <input type="text" 
            name='ppdPackage'
            value={formValues.ppdPackage}
            onChange={(e)=>setFormValues({...formValues,ppdPackage:e.target.value})} 
            className="form-control is-valid" 
            id="ppdPackage" placeholder="Enter Featured Package" />
          </div>

          <div className="col-md-5 mb-3">
            <label htmlFor="inputTag" className='badge badge-pill badge-info eclipseCamera'>
              <input type="file"
                name="images"
                onChange={(e)=>addImage(e)}
                id="inputTag"
                multiple />
              <AiOutlineCamera id='camera' />
              <span style={{color:"white"}}>Add Photos</span>
            </label>
          </div>

          <div className="col-md-5 mb-3">
          </div>

          <div className="col-md-5 mb-3">
            <button className='btn btn-danger cancelBtn' onClick={() => setTrack(2)}>Cancel</button>
          </div>
          <div className="col-md-5 mb-3">
            <button type='submit' className='btn btn-success saveBtn' onClick={() => {
              let check = checkRequiredValues();
              if(check){
                setTrack(4)
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

export default GeneralInfo