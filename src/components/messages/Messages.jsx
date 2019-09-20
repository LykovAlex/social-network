import React from 'react';
import style from './Messages.module.css';
import Dialog from './dialog/Dialog';
import Message from './message/Message';
import NewMessage from './newMessage/NewMessage';


const Messages = (props) => {

  let messagesElements = props.state.messages
    .map( message => <Message text={message.text} key={message.id} time={message.time}/> );

  let dialogsElements = props.state.dialogs
    .map( dialog => <Dialog name={dialog.name} key={dialog.id} id={dialog.id}/> );

  return (
    <div className={style.wrapper}>
      <div className={style.dialogs}>
        <div className="dialogs__items">
          {dialogsElements}
        </div>
      </div>
      <div className={style.messages}>
        <div className="messages__items">
          {messagesElements}
        </div>
        <NewMessage newMessageText={props.state.newMessageText} dispatch={props.dispatch} />
      </div>
    </div>
  )
}

export default Messages;
