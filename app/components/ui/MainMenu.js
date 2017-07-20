import React from 'react';
import {Link} from 'react-router'
import FaHome from 'react-icons/lib/fa/home'

const MainMenu = () => {

    return (
        <nav>
            <Link to="/"><FaHome/>Give Away</Link>
            <Link to="about"
            	  activeStyle={{
            	  backgroundColor: "white",
            	  color: "#539167"
            	}}>
            	About
            </Link>
            <Link to="donatenow"
            	  activeStyle={{
            	  backgroundColor: "#ccc",
            	  color: "#539167"
            	}}>
            	Donate Now
            </Link>
            <Link to="item"
            	  activeStyle={{
            	  	backgroundColor: "white",
            	  	color: "#539167"
            	  }}>
            	 Items
           	</Link>
          <div activeStyle={{backgroundColor: "white">
            <Link to="signin"activeStyle={{backgroundColor: "white",
            	  	color: "#539167"
            	  }}><button>
            	 Sign In</button>
           	</Link>
            <Link to="signup"activeStyle={{backgroundColor: "white",
            	  	color: "#539167"
            	  }}><button>
            	 Sign Up</button>
           	</Link>

          </div>
        </nav>
    )

  return (
    <nav>
      <Link to="/"><FaHome/>Give Away</Link>
      <Link to="about" activeStyle={{
        backgroundColor: "white",
        color: "#539167"
      }}>
        About
      </Link>
      <Link to="donatenow" activeStyle={{
        backgroundColor: "white",
        color: "#539167"
      }}>
        Donate Now
      </Link>
      <Link to="item" activeStyle={{
        backgroundColor: "white",
        color: "#539167"
      }}>
        Items
      </Link>
      <Link to="loginPage" activeStyle={{
        backgroundColor: "white",
        color: "#539167"
      }}>
        Login
      </Link>
    </nav>
  )

}


export default MainMenu
