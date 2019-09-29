import React from 'react';
import style from './Messages.module.css';
import Dialog from './dialog/Dialog';
import Message from './message/Message';
import NewMessageContainer from './newMessage/NewMessageContainer';


const Messages = (props) => {

  let messagesElements = props.messages
    .map( message => <Message text={message.text} key={message.id} time={message.time}/> );

  let dialogsElements = props.dialogs
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
        <NewMessageContainer />
      </div>
    </div>
  )
}

export default Messages;
