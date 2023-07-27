import React from 'react'
import './Sidebar.css'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import CreateIcon from '@mui/icons-material/Create';



function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='sidebar__header'>
        
        <div className="sidebar__info">
          <h2>Ritik Ritk 
            <CreateIcon />
          </h2>
          <h3>
            <FiberManualRecordIcon />
            Yadav Yadav
          </h3>
        </div>


      
      </div>
    
    </div>
  )
}

export default Sidebar
