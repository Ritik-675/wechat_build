import React from 'react'
import './Sidebar.css'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import CreateIcon from '@mui/icons-material/Create';
import SidebarOption from './SidebarOption';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import AppsIcon from '@mui/icons-material/Apps';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';



function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='sidebar__header'>
        <div className="sidebar__info">
          <h2>Ritik Ritk</h2>
          <h3>
            <FiberManualRecordIcon id='RecordIconID'/>
            Yadav Yadav
          </h3>
        </div>
      <CreateIcon  id='createIconID'/>
      </div>
      <SidebarOption Icon={InsertCommentIcon} title="Threads"/>
      <SidebarOption title="YouTube"/>
      <SidebarOption Icon={InboxIcon} title="Mentions & Reactions"/>
      <SidebarOption Icon={DraftsIcon} title="Saved Items"/>
      <SidebarOption Icon={BookmarkBorderIcon} title="Channel browser"/>
      <SidebarOption Icon={PeopleAltIcon} title="People & user groups"/>
      <SidebarOption Icon={AppsIcon} title="Apps"/>
      <SidebarOption Icon={FileCopyIcon} title="File Browser"/>
      <SidebarOption Icon={ExpandLessIcon} title="Show less"/>
    
    </div>
  )
}

export default Sidebar
