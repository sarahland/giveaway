import FaHeart from 'react-icons/lib/fa/heart'
import { Component } from 'react'

class Item extends Component {

render() {

	const { item, donatedBy, thumbnail, email, heart} = this.props
    return (
        <div className="item">
        	<h1>{item} {(heart) ? <FaHeart /> : null}</h1>
        	<img src={thumbnail} alt="item picture" />
        	<p><a href={`mailto:${email}`}>{email}</a></p>

        </div>
    )
}
}

export default Item
