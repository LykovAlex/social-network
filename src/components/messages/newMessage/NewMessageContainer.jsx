import React from 'react';
import NewMessage from './NewMessage';
import {addMessageActionCreater, updateMessageTextActionCreater} from './../../../redux/messages-reducer';

const NewMessageContainer = (props) => {

let updateMessageText = (text) => {
  props.dispatch(updateMessageTextActionCreater(text));
}
let addMessage = () => {
  props.dispatch(addMessageActionCreater());
}


  return <NewMessage addMessage={addMessage} updateMessageText={updateMessageText} newMessageText={props.newMessageText}  />
}

export default NewMessageContainer;
