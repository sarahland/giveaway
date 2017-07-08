import React from "react"
var Navbar = React.createClass({
  render: function() {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="container-header">
            <button
              type="buttpn"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#navbar"
              arial-expanded="false"
              arial-controls="navbar">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>

              </button>
              <a className="navbar-brand" href="#">Remedan in US</a>
          </div>
        </div>
      </nav>
    );
  }
});
module.exports = Navbar;
