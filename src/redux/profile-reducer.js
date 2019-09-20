const ADD_POST = 'ADD_POST';
const UPDATE_POST_TEXT = 'UPDATE_POST_TEXT';

const profileReducer = (state, action) => {
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
