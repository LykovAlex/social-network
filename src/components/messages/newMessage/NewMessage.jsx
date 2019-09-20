import React from 'react';
import style from './NewMessage.module.css';
import {addMessageActionCreater, updateMessageTextActionCreater} from './../../../redux/messages-reducer';

const NewMessage = (props) => {

let updateMessageText = (e) => {
  let text = e.target.value;
  props.dispatch(updateMessageTextActionCreater(text));
}
let addMessage = () => {
  props.dispatch(addMessageActionCreater());
}


  return (
    <div className={style.newMessage}>
      <textarea
        onChange={updateMessageText} className={style.newMessage__textarea}
        value={props.newMessageText} placeholder="Написать сообщение">
      </textarea>
      <button onClick={addMessage} className="sendButton">Отправить</button>
    </div>
  )
}

export default NewMessage;
