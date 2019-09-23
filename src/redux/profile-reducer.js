const ADD_POST = 'ADD_POST';
const UPDATE_POST_TEXT = 'UPDATE_POST_TEXT';

const initialState = {
  posts: [
    {message:"I'm fine! how are you ??", likes:"24", id:1},
    {message:"Hello! how are you ?", likes:"18", id:2},
    {message:"It's my first post", likes:"21", id:3},
  ],
  newPostText:'',
}

const profileReducer = (state = initialState, action) => {
  switch (action.type){
    case ADD_POST:
      let newPost = {
        message: state.newPostText,
        likes: 0,
        id: 4
      }
      state.posts.push(newPost);
      state.newPostText = '';
      return state;
    case UPDATE_POST_TEXT:
      state.newPostText = action.newText;
      return state;
    default:
      return state;
  }
}


export const addPostActionCreater = () => ({type:ADD_POST});
export const updatePostTextActionCreater = (text) => ({type:UPDATE_POST_TEXT, newText:text});

export default profileReducer;
