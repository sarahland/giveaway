import React from "react"
import React-icon from "react-icons/lib/fa/angle-down"

var Panel = ReactDOM.createClass({
  render: function() {
    return(
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <button
              <type="button"
                className="navbar-toggle collapsed"
                data-toggle="collapse"
                data-target="#navbar"
                arial-expanded="false"
                arial-controls="navbar">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span>angle-down</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
                <a className="navbar-brand" href="#">History of Remedan in US</a>
          </div>
        </div>
      </nav>
    );
  }
});
module.exports = Panel;
