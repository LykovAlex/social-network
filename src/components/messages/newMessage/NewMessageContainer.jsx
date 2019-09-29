import NewMessage from './NewMessage';
import {addMessage, updateMessageText} from './../../../redux/messages-reducer';
import {connect} from 'react-redux';

// const NewMessageContainer = (props) => {
//
// let updateMessageText = (text) => {
//   props.dispatch(updateMessageTextActionCreater(text));
// }
// let addMessage = () => {
//   props.dispatch(addMessageActionCreater());
// }
//
//
//   return <NewMessage addMessage={addMessage} updateMessageText={updateMessageText} newMessageText={props.newMessageText}  />
// }
const mapStateToProps = (state) => {
  return {
    newMessageText: state.messagesPages.newMessageText
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    addMessage: () => dispatch(addMessage()),
    updateMessageText: text => dispatch(updateMessageText(text))
  }
}

const NewMessageContainer = connect(mapStateToProps, mapDispatchToProps)(NewMessage);

export default NewMessageContainer;
