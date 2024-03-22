import React from 'react';
import style from './header.module.scss';
import { Logo } from '../logo/logo';

import PHONE_ICON from '../../assets/icons/phone_icon.png';
import MENU_ICON from '../../assets/icons/menu.png';

export const Header = () => {
  return (
    <header className={style.header}>
      <Logo />
      <nav className={style.nav}>
        <ul className={style.list}>
          <li className={style.list_item}>
            <a href="#" className={style.item_link}>
              Обо мне
            </a>
          </li>
          <li className={style.list_item}>
            <a href="#" className={style.item_link}>
              Наставничество
            </a>
          </li>
          <li className={style.list_item}>
            <a href="#" className={style.item_link}>
              Меороприятия
            </a>
          </li>
          <li className={style.list_item}>
            <a href="#" className={style.item_link}>
              Кейсы
            </a>
          </li>
          <li className={style.list_item}>
            <a href="#" className={style.item_link}>
              Отзывы
            </a>
          </li>
          <li className={style.list_item}>
            <a href="#" className={style.item_link}>
              Контакты
            </a>
          </li>
        </ul>
      </nav>
      <a href="#" className={style.call}>
        <img className={style.menu} src={MENU_ICON} alt="Menu" />
        <img className={style.call_image} src={PHONE_ICON} alt="" />
        <p className={style.call_number}>8-345-123-34-45</p>
      </a>
    </header>
  );
};
