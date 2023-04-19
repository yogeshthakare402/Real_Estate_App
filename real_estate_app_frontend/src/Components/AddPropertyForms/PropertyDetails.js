import React from 'react';
import { UsePropContext } from '../../StateManagement/PropertyContext';


function PropertyDetails({ setTrack }) {
  const {formValues, setFormValues} = UsePropContext();

  return (
    <div>
      <form method='POST' action='#'>
        <div id='formData' className="form-row d-flex align-items-center justify-content-center">
          <div className="col-md-5 mb-3">
            <label htmlFor="length">Length</label>
            <input type="text" 
            name='length'
            value={formValues.length || ""}
            onChange={(e)=>setFormValues({...formValues,length:e.target.value})}
            className="form-control is-valid" 
            id="length" 
            placeholder="Example : 100000"/>
          </div>

          <div className="col-md-5 mb-3">
            <label htmlFor="breadth">Breadth</label>
            <input type="text" 
            name='breadth'
            value={formValues.breadth || ""}
            onChange={(e)=>setFormValues({...formValues,breadth:e.target.value})} 
            className="form-control is-valid" 
            id="breadth" 
            placeholder="Example : 100000"/>
          </div>

          <div className="col-md-5 mb-3">
            <label htmlFor="totalArea">Total Area</label>
            <input type="text"
            value={formValues.breadth*formValues.length || formValues.area || ""}
            onChange={(e)=>setFormValues({...formValues,area:e.target.value})}
            name='totalArea' 
            className="form-control is-valid" 
            id="totalArea" placeholder="Example : 100000"/>
          </div>

          <div className="col-md-5 mb-3">
            <label htmlFor="areaUnit">Area Unit</label>
            <select id='areaUnit'
            value={formValues.areaUnit}
            onChange={(e)=>setFormValues({...formValues,areaUnit:e.target.value})}
            name='areaUnit' 
            className="form-control custom-select">
              <option value="#">Select Area unit</option>
              <option value="sqmeter">Sq meter</option>
              <option value="sqfoot">Sq foot</option>
              <option value="acre">Acre</option>
              <option value="hectare">Hectare</option>
            </select>
          </div>

          <div className="col-md-5 mb-3">
            <label htmlFor="bhk">No. of BHK</label>
            <select id='bhk'
            value={formValues.bhk}
            onChange={(e)=>setFormValues({...formValues,bhk:e.target.value})}
            name='bhk' 
            className="form-control custom-select">
              <option value="#">Select No of BHK</option>
              <option value="rk">1 RK</option>
              <option value="1bhk">1 BHK</option>
              <option value="2bhk">2 BHK</option>
              <option value="3bhk">3 BHK</option>
              <option value="4bhk">4 BHK</option>
              <option value="5bhk">5 BHK</option>
              <option value="more">More than 5 BHK</option>
            </select>
          </div>

          <div className="col-md-5 mb-3">
            <label htmlFor="floorNum">No of Floor</label>
            <input type="number" 
            name='floorNum'
            value={formValues.floorNum}
            onChange={(e)=>setFormValues({...formValues,floorNum:e.target.value})}
            className="form-control is-valid" 
            id="floorNum" 
            placeholder='Select No of Floor' min={0} />
          </div>

          <div className="col-md-5 mb-3">
            <label htmlFor="attached">Attached</label>
            <select name='attached'
            value={formValues.attached}
            onChange={(e)=>setFormValues({...formValues,attached:e.target.value})}
            id='attached' 
            className="form-control custom-select">
              <option value="#">Select Attached</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>

          <div className="col-md-5 mb-3">
            <label htmlFor="westToilet">Western Toilet</label>
            <select name='westToilet'
            value={formValues.westToilet}
            onChange={(e)=>setFormValues({...formValues,westToilet:e.target.value})} 
            id='westToilet' 
            className="form-control custom-select">
              <option value="#">Select Western Toilet</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>

          <div className="col-md-5 mb-3">
            <label htmlFor="furnished">Furnished</label>
            <select name='furnished'
            value={formValues.furnished}
            onChange={(e)=>setFormValues({...formValues,furnished:e.target.value})}
            id='furnished' 
            className="form-control custom-select">
              <option value="#">Bank Loan</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>

          <div className="col-md-5 mb-3">
            <label htmlFor="parking">Car Parking</label>
            <select name='parking'
            value={formValues.parking}
            onChange={(e)=>setFormValues({...formValues,parking:e.target.value})} 
            id='parking' 
            className="form-control custom-select">
              <option value="#">Select Car Parking</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>

          <div className="col-md-5 mb-3">
            <label htmlFor="lift">Lift</label>
            <select name='lift'
            value={formValues.lift}
            onChange={(e)=>setFormValues({...formValues,lift:e.target.value})}
            id='lift' 
            className="form-control custom-select">
              <option value="#">Select Lift</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>

          <div className="col-md-5 mb-3">
            <label htmlFor="electricity">Electricity</label>
            <input type="text"
            value={formValues.electricity}
            onChange={(e)=>setFormValues({...formValues,electricity:e.target.value})}
            name='electricity' 
            className="form-control is-valid" 
            id="electricity" 
            placeholder="Example:3 phase"/>
          </div>

          <div className="col-md-5 mb-3">
            <label htmlFor="facing">Facing</label>
            <select name='facing'
            value={formValues.facing}
            onChange={(e)=>setFormValues({...formValues,facing:e.target.value})}
            id='facing' 
            className="form-control custom-select">
              <option value="#">Select Facing</option>
              <option value="East">East</option>
              <option value="West">West</option>
              <option value="North">North</option>
              <option value="South">South</option>
              <option value="East-West">East-West</option>
              <option value="North-West">West-North</option>
              <option value="North-South">North-South</option>
              <option value="South-East">South-East</option>
            </select>
          </div>
          <div className="col-md-5 mb-3">
          </div>

          <div className="col-md-5 mb-3">
            <button className='btn btn-danger cancelBtn' onClick={() => setTrack(1)}>Cancel</button>
          </div>
          <div className="col-md-5 mb-3">
            <button type='submit' className='btn btn-success saveBtn' onClick={() => setTrack(3)}>Save & Continue</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default PropertyDetails