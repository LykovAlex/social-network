import React from 'react';
import NewPosts from './NewPosts';
import {addPostActionCreater, updatePostTextActionCreater} from './../../../redux/profile-reducer';

const NewPostsContainer = (props) => {

let addPost = () => {
  props.dispatch(addPostActionCreater());
}
let updatePostText = (text) => {
  props.dispatch(updatePostTextActionCreater(text));
}

  return <NewPosts addPost={addPost} newPostText={props.newPostText} updatePostText={updatePostText} />
}

export default NewPostsContainer;
