import React from 'react';
import { Logo } from '../logo/logo';
import style from './response-to-submit.module.scss';

export const ResponseToSubmit = () => {
  return (
    <div className={style.wrap}>
      <div className={style.feedback}>Спасибо за заявку</div>
      <div className={style.info}>
        Я обязательно
        <br />
        свяжусь с вами
        <br />в ближайшее время
      </div>
      <span>
        <Logo />
      </span>
    </div>
  );
};
