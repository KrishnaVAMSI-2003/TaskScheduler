import React from 'react'
import './style.css'

export default function Sidebar(props) {
  const {setSection} = props
  return (
    <div className='sidebar'>
      <div className='sidebar-text'>NavKeys</div>
      <div className='sidebar-container'>
        <div className='sidebar-items' onClick={()=>{setSection('inbox')}}>TodoHub</div>
        <div className='sidebar-items' onClick={()=>{setSection('today')}}>TodayList</div>
        <div className='sidebar-items' onClick={()=>{setSection('upcoming')}}>Upcoming</div>
      </div>
    </div>
  )
}
