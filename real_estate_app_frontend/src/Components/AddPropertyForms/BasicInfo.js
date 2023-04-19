import React from 'react';
import { UsePropContext } from '../../StateManagement/PropertyContext';

function BasicInfo({setShowForm,setTrack}) {
const {formValues, setFormValues} = UsePropContext()

  return (
    <div>
      <form method='POST' action='#'>
        <div id='formData' className="form-row d-flex align-items-center justify-content-center">
          <div className="col-md-5 mb-3">
            <label htmlFor="property">Property Type</label>
            <select 
            id='property' 
            name='property'
            value={formValues.property}
            onChange={(e)=>setFormValues({...formValues,property:e.target.value})}
            className="form-control custom-select">
              <option value="#">Select property type</option>
              <option value="Flat">Flat</option>
              <option value="House">House</option>
              <option value="Plot">Plot</option>
            </select>
          </div>

          <div className="col-md-5 mb-3">
            <label htmlFor="negotiable">Negotiable</label>
            <select 
            id='negotiable' 
            name='negotiable'
            value={formValues.negotiable}
            onChange={(e)=>setFormValues({...formValues,negotiable:e.target.value})} 
            className="form-control custom-select">
              <option value="#">Is property Negotiable?</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>

          <div className="col-md-5 mb-3">
            <label htmlFor="price">Price</label>
            <input 
            type="text"
            id="price"
            name='price'
            value={formValues.price}
            onChange={(e)=>setFormValues({...formValues,price:e.target.value})}
            className="form-control is-valid" 
            placeholder="Example : 100000" required />
          </div>

          <div className="col-md-5 mb-3">
            <label htmlFor="ownership">Ownership</label>
            <select 
            name='ownership' 
            id='ownership'
            value={formValues.ownership}
            onChange={(e)=>setFormValues({...formValues,ownership:e.target.value})}
            className="form-control custom-select">
              <option value="#">Select Ownership</option>
              <option value="individual">Individual Ownership</option>
              <option value="joint">Joint Ownership</option>
              <option value="bynomination">Ownership by Nomination</option>
            </select>
          </div>

          <div className="col-md-5 mb-3">
            <label htmlFor="propertyAge">Property Age</label>
            <input type="text"
            id="propertyAge" 
            name='propertyAge'
            value={formValues.propertyAge}
            onChange={(e)=>setFormValues({...formValues,propertyAge:e.target.value})} 
            className="form-control is-valid" 
            placeholder="Property Age in years" required />
          </div>

          <div className="col-md-5 mb-3">
            <label htmlFor="propApproved">Property Approved</label>
            <select name='propApproved'
            value={formValues.propApproved}
            onChange={(e)=>setFormValues({...formValues,propApproved:e.target.value})} 
            id='propApproved' 
            className="form-control custom-select">
              <option value="#">Property Approved</option>
              <option value="byBank">By Bank</option>
              <option value="byGovt">By Government</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="col-md-5 mb-3">
            <label htmlFor="propDescription">Property Description</label>
            <input type="text"
            id="propDescription" 
            name='propDescription'
            value={formValues.propDescription}
            onChange={(e)=>setFormValues({...formValues,propDescription:e.target.value})}
            className="form-control is-valid" 
            placeholder="Property Description"/>
          </div>

          <div className="col-md-5 mb-3">
            <label htmlFor="bankLoan">Bank Loan</label>
            <select id='bankLoan'
            value={formValues.bankLoan}
            onChange={(e)=>setFormValues({...formValues,bankLoan:e.target.value})}
            name='bankLoan' 
            className="form-control custom-select">
              <option value="#">Bank Loan</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
          <div className="col-md-5 mb-3">
            <button className='btn btn-danger cancelBtn' onClick={()=>setShowForm(false)}>Cancel</button>
          </div>
          <div className="col-md-5 mb-3">
            <button type='submit' className='btn btn-success saveBtn' onClick={()=>setTrack(2)}>Save & Continue</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default BasicInfo