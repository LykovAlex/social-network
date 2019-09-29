import React from 'react';
import Menu from './menu/Menu';
import FriendsContainer from './friends/FriendsContainer';
import style from './Sidebar.module.css';

const Sidebar = (props) => {

  return (
    <div className={style.sidebar}>
      <Menu/>
      <FriendsContainer />
    </div>
  )
}

export default Sidebar;
