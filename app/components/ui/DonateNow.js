import { PropTypes, Component } from 'react'
import React from 'react'
export const DonateNowForm = ({ name,email, phoneNumber, address, itemName, itemCondition, description, itemPicture }) => {
  let _name, _email, _phonNumber,  _address, _itemName, _itemCondition, _description, _itemPicture
  const submit =(e) => {
    e.preventDefault()
    console.log("name", _name.value)
    console.log("email", _email.value)
    console.log("phoneNumber", _phonNumber.value)
    console.log("address", _address.value)
    console.log("itemName", _itemName.value)
    console.log("itemCondition", _itemCondition.checked)
    console.log("description", _description.value)
    console.log("itemPicture", _itemPicture.value)
  }
 
    return (
      <form onSubmit={submit} className="donate-now-form">
        <label htmlFor="name">Donation From</label>
        <input id="name"
              type="text"
              required
              defaultValue={name}
              ref={input => _name = input}/>
        <label htmlFor="email">Email</label>
        <input id="email"
              type="text"
              required
              defaultValue={email} 
              ref={input => _email = input}/>
        <label htmlFor="phoneNumber">Phone Number</label>
        <input id="phoneNumber"
              type="number"
              required
              defaultValue={phoneNumber} 
              ref={input => _phonNumber = input}/>
        <label htmlFor="address">Address</label>
        <input id="address"
                type="text && number"
                required
                defaultValue={address} 
                ref={input => _address = input}/>
        <label htmlFor="itemName">Item Name</label>
        <input id="itemName"
                type="text"
                required
                defaultValue={itemName} 
                ref= {input => _itemName = input}/>
        <div>
            <input id="itemCondition"
                  type="checkbox"
                  defaultChecked={itemCondition} 
                  ref="itemCondition"
                  ref={input => _itemCondition = input}/>
            <label htmlFor="itemCondition">Item in faire condition</label>
        </div>
        <label htmlFor="description">Item Description</label>
        <input id="description"
              type="text"
              required
              defaultValue={descrption} 
              ref={input => _description =input}/>
        <label htmlFor="itemPicture">Item Picture</label>
        <input id="itemPicture"
              type="image"
              required
              defaultValue={itemPicture} 
              ref={input => _itemPicture =input}/>
      )
  }
DonateNowForm.PropTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phoneNumber: PropTypes.int.isRequired,
  address: PropTypes.int&&string.isRequired,
  itemName: PropTypes.string.isRequired,
  itemCondition: PropTypes.bool.isRequired,
  description: PropTypes.string.isRequired,
  itemPicture; PropTypes.url.isRequired
}
export default DonateNow
