import React from 'react';
import { NavLink } from 'react-router-dom';
import './Title.css';

function Title() {
  return (
    <div className="Title">
      <header>
        <h1>SFPOPOS</h1>
        <div className="Title-Subtitle">San Francisco Privately Owned Public Open Spaces</div>
        <div>
          <NavLink to="/">List</NavLink>
          <NavLink to="/about">About</NavLink>
        </div>
      </header>
    </div>
  );
}

export default Title;