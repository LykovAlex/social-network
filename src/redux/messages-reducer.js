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
  newMessageText:'',
  id: 5
}

const messagesReducer = (state = initialState, action) => {
  switch (action.type){
    case ADD_MESSAGE:
    let date = new Date();
      let message = {
        text: state.newMessageText,
        time: `${date.toLocaleTimeString()}`,
        id: state.id++
      }
      return {
        ...state,
        messages: [...state.messages, message],
        newMessageText: ''
      }
    case UPDATE_MESSAGE_TEXT:
      return {
        ...state,
        newMessageText: action.payload
      }
    default:
      return state;
  }
}

export const addMessage = () => ({type:ADD_MESSAGE});
export const updateMessageText = (text) => ({type:UPDATE_MESSAGE_TEXT, payload:text});

export default messagesReducer;
