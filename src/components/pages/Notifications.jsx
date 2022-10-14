import React from 'react'
import "../Style/Notifications.css";
import { NavLink } from 'react-router-dom';
import Navbar from './Navbar';

function Notifications() {
  return (
    <>
      <Navbar />

      <div className="Notifications container">
        <div className="top">
          <h2>My Notifications</h2>
          <p>This is where you can cheak all of your notifications.</p>
        </div>

        <div className="button">
          <div className="row">
            <div className="buttons">
              <h3>Notifications list</h3>
              <span>...</span>
            </div>
            <div className="list">
              <div className="list-top">
                <p className='artest'>
                Artist <span>Vince Perkins</span> accepted your voice over stage offer for project: <span>New product lunch Explainer video</span>
                </p>
              </div>
              <div className="list-button">
                <p className='artest'>
                Artist <span>Vince Perkins</span> Perkins <span>Draft 1  </span> for project: <span>New product lunch Explainer video</span>
                </p>
              </div>
              <div>
                <p className="sh">Showing 1 to 6 of 12 transactions</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Notifications
