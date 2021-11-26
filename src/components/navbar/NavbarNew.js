import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavbarNew.css";
import {FaTimes} from 'react-icons/fa';
import {AiOutlineBars} from 'react-icons/ai';
import image from '../../assets/logo1.png';
import {IoHomeOutline} from 'react-icons/io5'
import {BsCalendarDay} from 'react-icons/bs'
import {MdRestaurantMenu} from 'react-icons/md'

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            <img src={image} alt="logo" />
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                className={(navData) => "nav-links"+ (navData.isActive ? " active":"") }
                onClick={handleClick}
              >
                <span className="nav-span">Home <IoHomeOutline /> </span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/book"
                className={(navData) => "nav-links"+ (navData.isActive ? " active":"") }
                onClick={handleClick}
              >
                <span className="nav-span">Booking <BsCalendarDay /> </span>
              </NavLink>
            </li>
            
            <li className="nav-item">
              <NavLink
                to="/menu"
                className={(navData) => "nav-links"+ (navData.isActive ? " active":"") }
                onClick={handleClick}
              >
               <span className="nav-span">Menu <MdRestaurantMenu /> </span>
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            {click ? <FaTimes /> : <AiOutlineBars />}
          </div>
        </div>
      </nav>
  );
}

export default NavBar;