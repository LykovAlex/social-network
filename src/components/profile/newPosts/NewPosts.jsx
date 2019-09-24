import React from 'react';
import style from './NewPosts.module.css';

const NewPosts = ({updatePostText, newPostText, addPost}) => {

  return(
    <div className="row">
      <div className={style.newPosts}>
        <p className={style.newPosts__title}>Мои посты</p>
        <div className={style.newPosts__wrapper}>
          <textarea onChange={ e => updatePostText(e.target.value)}  value={newPostText}
            type="text" placeholder="Новый пост" className={style.newPosts__textarea}>
          </textarea>
          <button onClick={addPost} className="sendButton">Опубликовать</button>
        </div>
      </div>
    </div>
  )
}

export default NewPosts;
