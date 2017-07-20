import React from 'react';
// import { Link } from 'react-router'
import {Component} from 'react'
import Item from './Item'

class ItemList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      items: [
        
        {
          item: "Sofa",
          email: "mohakemal9@gmail.com",
          thumbnail: "../assets/sofa.jpg"
        },
        {
          item: "Book",
          email: "mohakemal9@gmail.com",
          thumbnail: "../assets/book.jpg"
        }


      ]
    }
  }

  render() {
    const {items} = this.state
    return (
      <div className="item-list">
        <h1>Items Ready For Donation: Select the Item you would like to get?</h1>

        {items.map((data, i) => <Item key={i} onClick={email => console.log(email)} {...data}/>)}

      </div>


    )
  }

}

export default ItemList
