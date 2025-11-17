import React from 'react'
import './Loader.css';
function Loader() {
    return (
        <>
      <div id="wrapper">
        <div id="mouse"></div>
        <div className="loader"></div>
        <div className="loading-bar">
            <div className="progress-bar"></div>
        </div>
        <div className="status">
            <div className="state"></div>
            <div className="percentage"></div>
        </div>
    </div>
        </>
  )
}

export default Loader