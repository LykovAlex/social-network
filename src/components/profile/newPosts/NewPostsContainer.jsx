import NewPosts from './NewPosts';
import {addPost, updatePostText} from './../../../redux/profile-reducer';
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
  return {
    newPostText: state.profilePages.newPostText
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => dispatch(addPost()),
    updatePostText: (text) => dispatch(updatePostText(text))
  }
}

const NewPostsContainer = connect(mapStateToProps, mapDispatchToProps)(NewPosts);

export default NewPostsContainer;
