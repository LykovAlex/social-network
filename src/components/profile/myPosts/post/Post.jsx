import React from 'react';
import style from './Post.module.css';

const Post = (props) => {
  
  return (
    <div className={style.post}>
      <div className={style.post__wrapper}>
        <img src="img/photo.jpg" alt="miniature" className={style.post__img}/>
        <p className={style.post__text}> {props.message} </p>
      </div>
      <p className={style.post__likes}>Likes: <span className={style.post__countLikes}>{props.likes}</span>  </p>
    </div>
  )
}

export default Post;
