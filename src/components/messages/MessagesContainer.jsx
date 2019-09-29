import Messages from './Messages';
import {connect} from 'react-redux';



const mapStateToProps = ({messagesPages}) => {
  return {
    messages: messagesPages.messages,
    dialogs: messagesPages.dialogs
  }
}
const mapDispatchToProps = (dispatch) => {
  return {}
}

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages);

export default MessagesContainer;
