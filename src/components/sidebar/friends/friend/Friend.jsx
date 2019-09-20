import React from 'react';
import style from './Friend.module.css';

const Friend = (props) => {

  return (
    <div className={style.friend}>
      <a href="profile/1" className={style.friend__link}>
        <img src={props.photo} alt="friend-avatarka" className={style.friend__photo}/>
        <p className={style.friend__name}>{props.name}</p>
      </a>
    </div>
  )
}

export default Friend;
