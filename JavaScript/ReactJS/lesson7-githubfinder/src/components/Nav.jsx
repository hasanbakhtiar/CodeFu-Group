import React, { Component } from "react";

class Nav extends Component {
  render() {
    return (
   <nav className="navbar bg-dark navbar-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="https://github.com" target="_blank">
      <i className="fa-brands fa-github me-2" />
      Github Finder
    </a>
  </div>
</nav>

    );
  }
}

export default Nav;
