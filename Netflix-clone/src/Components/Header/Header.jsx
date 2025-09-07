import React from 'react'
import "../Header/Header.css"
import NetflixLogo from "../../assets/image/Netflix_Logo_RGB.png";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
const Header = () => {
  return (
    <nav className="header_outer_container">
      <div className="header_container ">
        <div className="header_left">
          <ul>
            <li>
              <img
                src={NetflixLogo}
                alt="NetflixLogo"
                className="netflix-logo"
              />
            </li>
            <li>Netflix</li>
            <li>Home</li>
            <li>TVShows</li>
            <li>Movies</li>
            <li>Latest</li>
            <li>MyLists</li>
            <li>Browse by Languages</li>
          </ul>
        </div>
        <div className="header_right">
          <ul>
            <li>
              <SearchIcon />
            </li>
            <li><NotificationsIcon/></li>
            <li><AccountBoxIcon/></li>
            <li><ArrowDropDownIcon/></li>
        
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header