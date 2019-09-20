import React from 'react';
import style from './Dialog.module.css';
import {NavLink} from 'react-router-dom';

const Dialog = (props) => {

  let path = `/messages/${props.id}`;

  return (
    <div className="dialog">
      <NavLink to={path} className={style.dialog__link}>
        <img src='img/photo.jpg' alt="avatarka" className={style.dialog__photo}/>
        <p className={style.dialog__name}>{props.name}</p>
      </NavLink>
    </div>
  )
}

export default Dialog;
