import messagesReducer from './messages-reducer';
import profileReducer from './profile-reducer';
import sidebarReducer from './sidebar-reducer';

let store = {
  _state: {
    messagesPages: {
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
    },
    postsPages: {
      posts: [
        {message:"I'm fine! how are you ??", likes:"24", id:1},
        {message:"Hello! how are you ?", likes:"18", id:2},
        {message:"It's my first post", likes:"21", id:3},
      ],
      newPostText:'',
    },
    sidebar: {
      friends: [
        {name: 'Victor', photo:'img/photo.jpg', id:1},
        {name: 'Sevilia', photo:'img/photo.jpg', id:2},
        {name: 'Billi', photo:'img/photo.jpg', id:3},
        {name: 'Hash', photo:'img/photo.jpg', id:4},
      ]
    }
  },
  _renderDOMTree(){
    console.log('zzz');
  },
  getState(){
    return this._state;
  },
  subscribe(observer) {
    this._renderDOMTree = observer;
  },
  dispatch(action){
    this._state.postsPages = profileReducer(this._state.postsPages, action);
    this._state.messagesPages = messagesReducer(this._state.messagesPages, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);

    this._renderDOMTree();
  }
}

window.state = store._state;


export default store;
