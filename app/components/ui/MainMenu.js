import React from 'react';
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
          <div>
            <Link to="signin"activeStyle={{backgroundColor: "white",
            	  	color: "blue"
            	  }}><button>
            	 Sign In</button>
           	</Link>
            <Link to="signup"activeStyle={{backgroundColor: "white",
            	  	color: "blue"
            	  }}><button>
            	 Sign Up</button>
           	</Link>

          </div>
        </nav>
    )
}

export default MainMenu
