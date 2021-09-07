import React from 'react'
import './Preloader.css'

function Preloader({ isShow }) {
  return (
    <div className={isShow ? 'preloader preloader_active' : 'preloader'}>
      <div className="preloader__container">
        <span className="preloader__round"></span>
      </div>
    </div>
  )
};

export default Preloader;