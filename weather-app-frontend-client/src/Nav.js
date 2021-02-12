import React, {Component} from 'react'
import './App.css';
import { Link } from 'react-router-dom';

class Nav extends Component {
  render() {
    return(
      <nav>
        <h3> Hello </h3>
        <ul className ="NavStuff">
          <Link to="/Home">
            <li> Home </li>
          </Link>
          <Link to="/Signup">
            <li> Sign Up </li>
          </Link>
          <Link to="/LogIn">
            <li> Log In </li>
          </Link>
        </ul>
      </nav>
    )
  }
}
export default Nav;
