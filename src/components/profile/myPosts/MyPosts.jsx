import React from 'react';
import Post from './post/Post.jsx';
import style from './MyPosts.module.css';


const MyPosts = (props) => {

  let postsElements = props.posts
    .map( post => <Post message={post.message} key={post.id} id={post.id} likes={post.likes} /> );

  return (
    <div className={style.posts}>
      {postsElements}
    </div>
  )
}

export default MyPosts;
