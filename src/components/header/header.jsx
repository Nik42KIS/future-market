import React from 'react';
import style from './header.module.scss';
import PHONE_ICON from '../../assets/icons/phone_icon.png';

export const Header = () => {
  return (
    <header className={style.header}>
      <span className={style.logo}>ALEX. SHEVTSOV</span>
      <nav className={style.nav}>
        <ul className={style.list}>
          <li className={style.list_item}>Обо мне</li>
          <li className={style.list_item}>Наставничество</li>
          <li className={style.list_item}>Мероприятия</li>
          <li className={style.list_item}>Кейсы</li>
          <li className={style.list_item}>Отзывы</li>
          <li className={style.list_item}>Контакты</li>
          <span className={style.call}>
            <img className={style.call_image} src={PHONE_ICON} alt="" />
            <p className={style.call_number}>8-345-123-34-45</p>
          </span>
        </ul>
      </nav>
    </header>
  );
};
