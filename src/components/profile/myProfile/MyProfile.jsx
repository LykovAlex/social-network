import React from 'react';
import style from './MyProfile.module.css';

const MyProfile = () => {
  return (
    <div className={style.myProfile}>
      <img src="img/photo.jpg" alt="myPhoto" className={style.myProfile__photo}/>
      <div className={style.myProfile__info}>
        <p className={style.myProfile__name}>Лыков Александр</p>
        <p className={style.myProfile__birthday}>Дата рождения: 25.08.1990</p>
        <p className={style.myProfile__city}>Город: Ростов-на-Дону</p>
        <p className={style.myProfile__education}>Образование: ИУБиП</p>
      </div>
    </div>
  )
}

export default MyProfile;
