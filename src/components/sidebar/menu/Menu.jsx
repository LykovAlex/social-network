import React from 'react';
import style from './Menu.module.css';
import {NavLink} from 'react-router-dom';

const Menu = () => {
  return(
    <nav className={style.menu}>
      <ul className={style.menu__list}>
        <li className={style.menu__item}>
          <NavLink className={style.menu__link} activeClassName={style.active} to='/profile'>Мой профиль</NavLink>
        </li>
        <li className={style.menu__item}>
          <NavLink className={style.menu__link} activeClassName={style.active} to='/messages'>Сообщения</NavLink>
        </li>
        <li className={style.menu__item}>
          <NavLink className={style.menu__link} activeClassName={style.active} to='/news'>Новости</NavLink>
        </li>
        <li className={style.menu__item}>
          <NavLink className={style.menu__link} activeClassName={style.active} to='/music'>Музыка</NavLink>
        </li>
        <li className={style.menu__item}>
          <NavLink className={style.menu__link} activeClassName={style.active} to='/settings'>Настройки</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Menu;
