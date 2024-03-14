import React from 'react'
import { NavLink } from 'react-router-dom'
import Contact from './Contact'
import Shop from './Shop'
import About from './About'

type Props = {}

const Header = (props: Props) => {
  return (
    
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container">
      <a className="navbar-brand" href="#">
        {/* { props.title } */} product title
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            Home
            {/* <NavLink to={'/'}>Home</NavLink> */}
          </li>
          <li className="nav-item">
            <About/>
          {/* <NavLink to={'/details'}>Details</NavLink> */}
          </li>
          <li className="nav-item">
          <Shop/>
            {/* <NavLink to={'/demo'}>Demo</NavLink> */}
          </li>
          <li className="nav-item">
            <Contact/>
            {/* <NavLink to={'/demo'}>Demo</NavLink> */}
          </li>
        </ul>
      </div>
    </div>
  </nav>
  )
}
export default Header