import React from 'react';
import style from './NewMessage.module.css';

const NewMessage = ({updateMessageText, newMessageText, addMessage}) => {

  return (
    <div className={style.newMessage}>
      <textarea
        onChange={ e => updateMessageText(e.target.value)} className={style.newMessage__textarea}
        value={newMessageText} placeholder="Написать сообщение">
      </textarea>
      <button onClick={addMessage} className="sendButton">Отправить</button>
    </div>
  )
}

export default NewMessage;
