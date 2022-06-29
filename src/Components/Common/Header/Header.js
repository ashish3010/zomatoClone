import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className='max-width header'>
      <img src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png?fit=around|198:42&crop=198:42;*,*" alt="zomato-logo" className='header-logo' />

      <div className="header-right">
        <div className="header-location-search-container">
          <div className="location-wrapper">
            <div className="location-icon-name">
            <i className="fa-solid fa-location-dot absolute-center location-icon"></i>
            <div>Banglore</div>
            </div>
            <i className="fa-solid fa-caret-down absolute-center"></i>
          </div>
          <div className="location-search-separator"></div>
          <div className="header-searchbar">
          <i className="fa-solid fa-magnifying-glass absolute-center search-icon"></i>
          <input type="text" placeholder='Search for resturant, cuisine or a dish' className='search-input' />
          </div>
        </div>
        <div className="profile-wrapper">
        <img
            src="https://b.zmtcdn.com/images/user_avatars/mug_2x.png?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A"
            className="header-profile-image"
            alt="Profile"
          />
          <span className="header-username">Ashish</span>
          <i className="fa-solid fa-angle-down absolute-center profile-options-icons"></i>
        </div>
      </div>
    </div>
  )
}

export default Header