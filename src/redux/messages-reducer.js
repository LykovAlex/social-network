const ADD_MESSAGE = 'ADD_MESSAGE';
const UPDATE_MESSAGE_TEXT = 'UPDATE_MESSAGE_TEXT';

const messagesReducer = (state, action) => {
  switch (action.type){
    case ADD_MESSAGE:
      let message = {
        text: state.newMessageText,
        time: '14:05',
        id: 5
      }
      state.messages.push(message);
      state.newMessageText = '';
      return state;
    case UPDATE_MESSAGE_TEXT:
      state.newMessageText = action.newText;
      return state;
    default:
      return state;
  }
}

export const addMessageActionCreater = () => ({type:ADD_MESSAGE});
export const updateMessageTextActionCreater = (text) => ({type:UPDATE_MESSAGE_TEXT, newText:text});

export default messagesReducer;
