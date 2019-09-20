import React from 'react';
import style from './Message.module.css';

const Message = (props) => {
  return (
    <div className={style.message}>
      <p className="message__text">{props.text}</p>
      <span className="message__time">{props.time}</span>
    </div>
  )
}

export default Message;
