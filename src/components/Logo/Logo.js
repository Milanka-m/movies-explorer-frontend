import React from 'react';
import './Logo.css';
import { NavLink } from 'react-router-dom';

function Logo() {
  return (
    <NavLink className="logo" to="/" target="__blank" rel="noopener"></NavLink>
  );
}

export default Logo;