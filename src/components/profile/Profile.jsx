import React from 'react';
import MyProfile from './myProfile/MyProfile';
import NewPostsContainer from './newPosts/NewPostsContainer';
import MyPosts from './myPosts/MyPosts';
// import style from './Profile.module.css';



const Profile = (props) => {

  return (
    <div className = "wrapper">
      <MyProfile />
      <NewPostsContainer dispatch={props.dispatch} newPostText={props.state.newPostText} />
      <MyPosts posts={props.state.posts} />
    </div>
  )
}

export default Profile;
