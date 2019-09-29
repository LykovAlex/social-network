const ADD_POST = 'ADD_POST';
const UPDATE_POST_TEXT = 'UPDATE_POST_TEXT';

const initialState = {
  posts: [
    {message:"I'm fine! how are you ??", likes:"24", id:1},
    {message:"Hello! how are you ?", likes:"18", id:2},
    {message:"It's my first post", likes:"21", id:3},
  ],
  newPostText:'',
  id: 4
}

const profileReducer = (state = initialState, action) => {
  switch (action.type){
    case ADD_POST:
      let newPost = {
        message: state.newPostText,
        likes: 0,
        id: state.id++
      }
      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: ''
      }
    case UPDATE_POST_TEXT:
    return {
      ...state,
      newPostText: action.payload
    }
    default:
      return state;
  }
}


export const addPost = () => ({type:ADD_POST});
export const updatePostText = (text) => ({type:UPDATE_POST_TEXT, payload:text});

export default profileReducer;
