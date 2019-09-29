import MyPosts from './MyPosts';
import {connect} from 'react-redux';


const mapStateToProps = (state) => {
  return {
    posts: state.profilePages.posts
  }
}
const mapDispatchToProps = (dispatch) => {
  return {}
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
