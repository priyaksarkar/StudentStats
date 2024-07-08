import React from 'react'
import './Programs.css'

const Programs = () => {
  return (
    <div id="programs" className='programs'>
        <div className='program'>
            <img src='../src/assets/dashboard.jpg' alt="" />
            <div className="caption">
                <img src='../src/assets/icons8-dashboard-100.png' alt="" />
                <p>Dashboard</p>
            </div>
        </div>
        <div className='program'>
            <img src='../src/assets/attendance.jpg' alt="" />
            <div className="caption">
                <img src='../src/assets/icons8-attendance-100.png' alt="" />
                <p>Attendance Management</p>
            </div>
        </div>
        <div className='program'>
            <img src='../src/assets/feepage.jpg' alt="" />
            <div className="caption">
                <img src='../src/assets/icons8-fees-64.png' alt="" />
                <p>Fee Management</p>
            </div>
        </div>
    </div>
  )
}

export default Programs