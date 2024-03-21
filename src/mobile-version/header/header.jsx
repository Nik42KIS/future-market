import React from 'react';
import style from './header.module.scss';
import PHONE_ICON from '../../assets/icons/phone_icon.png';
import { Logo } from '../logo/logo';
import MENU_ICON from '../../assets/icons/menu.png';

export const HeaderMobile = () => {
  return (
    <header className={style.header}>
      <Logo />
      <nav className={style.nav}>
        <img className={style.menu} src={MENU_ICON} alt="Menu" />
        <img className={style.call_image} src={PHONE_ICON} alt="" />
      </nav>
      
    </header>
  );
};
