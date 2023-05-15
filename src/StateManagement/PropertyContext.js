import React, { createContext, useContext, useState } from 'react';

let PropContext = createContext()

function PropertyContext({ children }) {
  const [insertImages, setInsertImages] = useState([])
  const [formValues, setFormValues] = useState({
    "property": "",
    "length": "",
    "breadth": "",
    "area": "",
    "mobile": "",
    "negotiable": "",
    "price": "",
    "ownership": "",
    "propertyAge": "",
    "propApproved": "",
    "propDescription": "",
    "bankLoan": "",
    "areaUnit": "",
    "bhk": "",
    "floorNum": "",
    "attached": "",
    "westToilet": "",
    "furnished": "",
    "parking": "",
    "lift": "",
    "electricity": "",
    "facing": "",
    "name": "",
    "postedBy": "",
    "saleType": "",
    "package": "",
    "ppdPackage": "",
    "email": "",
    "city": "",
    "addArea": "",
    "pincode": "",
    "address": "",
    "landmark": "",
    "latitude": "",
    "longitude": ""
  })
  // console.log(insertImages)

  const [propertyList, setPropertyList] = useState([]);

  const [showProperty, setShowProperty] = useState([]);

  // const [currentPage]

  return (
    <PropContext.Provider value={{ formValues, setFormValues, insertImages, setInsertImages, propertyList, setPropertyList, showProperty, setShowProperty }}>
      {children}
    </PropContext.Provider>
  )
}

export default PropertyContext;

export const UsePropContext = () => {
  return useContext(PropContext)
}