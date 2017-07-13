import { Link } from 'react-router'
import FaHome from 'react-icons/lib/fa/home'

const MainMenu = () => {
    return (
        <nav>

            <Link to="/"><FaHome/>Give Away</Link>
            <Link to="about"
            	  activeStyle={{
            	  backgroundColor: "white",
            	  color: "blue"
            	}}>
            	About
            </Link>
            <Link to="donatenow"
            	  activeStyle={{
            	  backgroundColor: "white",
            	  color: "blue"
            	}}>
            	Donate Now
            </Link>
            <Link to="item"
            	  activeStyle={{
            	  	backgroundColor: "white",
            	  	color: "blue"
            	  }}>
            	 Items
           	</Link>
            <Link to="loginPage"
            	  activeStyle={{
            	  	backgroundColor: "white",
            	  	color: "blue"
            	  }}>
            	 Login
           	</Link>
        </nav>
    )
}

export default MainMenu
