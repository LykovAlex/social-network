import React from 'react';
import Menu from './menu/Menu';
import Friends from './friends/Friends';
import style from './Sidebar.module.css';

const Sidebar = (props) => {

  return (
    <div className={style.sidebar}>
      <Menu/>
      <Friends friends={props.state.friends}/>
    </div>
  )
}

export default Sidebar;
