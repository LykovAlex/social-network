import React from 'react';
import style from './NewPosts.module.css';
import {addPostActionCreater, updatePostTextActionCreater} from './../../../redux/profile-reducer';

const NewPosts = (props) => {

let newPostElement = React.createRef();

let addPost = () => {
  props.dispatch(addPostActionCreater());
}
let updatePostText = () => {
  let text = newPostElement.current.value;
  props.dispatch(updatePostTextActionCreater(text));
}

  return(
    <div className="row">
      <div className={style.newPosts}>
        <p className={style.newPosts__title}>Мои посты</p>
        <div className={style.newPosts__wrapper}>
          <textarea onChange={updatePostText} ref={newPostElement} value={props.newPostText}
            type="text" placeholder="Новый пост" className={style.newPosts__textarea}>
          </textarea>
          <button onClick={addPost} className="sendButton">Опубликовать</button>
        </div>
      </div>
    </div>
  )
}

export default NewPosts;
