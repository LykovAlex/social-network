const ADD_MESSAGE = 'ADD_MESSAGE';
const UPDATE_MESSAGE_TEXT = 'UPDATE_MESSAGE_TEXT';

const initialState = {
  messages: [
    {text:'What are you doing ???', time:'14:07', id:1},
    {text:'Where are you from ??', time:'14:07', id:2},
    {text:'How are you ?', time:'14:06', id:3},
    {text:'Hello!', time:'14:06', id:4},
  ],
  dialogs: [
    {name:'Alex', id:1},
    {name:'Tanya', id:2},
    {name:'Sergey', id:3},
    {name:'Nastya', id:4},
    {name:'Dimon', id:5},
    {name:'Svetka', id:6},
    {name:'Sanek', id:7},
    {name:'Nika', id:8},
  ],
  newMessageText:''
}

const messagesReducer = (state = initialState, action) => {
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
