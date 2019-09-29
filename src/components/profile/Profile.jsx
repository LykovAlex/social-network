import React from 'react';
import MyProfile from './myProfile/MyProfile';
import NewPostsContainer from './newPosts/NewPostsContainer';
import MyPostsContainer from './myPosts/MyPostsContainer';
// import style from './Profile.module.css';



const Profile = (props) => {

  return (
    <div className = "wrapper">
      <MyProfile />
      <NewPostsContainer />
      <MyPostsContainer />
    </div>
  )
}

export default Profile;
