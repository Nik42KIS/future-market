import React from 'react';
import style from './button.module.scss';
import VECTOR from '../../assets/icons/vector.svg';
import VECTOR_BLUE from '../../assets/icons/vector_blue.svg';

export const Button = ({ text, bg, action, sumbitAction }) => {
  return (
    <button
      onSubmit={() => sumbitAction(true)}
      onClick={() => action(true)}
      className={`${style.btn} ${bg === 'white' ? style.reg_btn : style.free_btn} `}
      type="submit">
      <span className={style.btn_name}>{text}</span>
      <span className={style.vector}>
        <img src={bg === 'white' ? VECTOR_BLUE : VECTOR} alt="vector" />
      </span>
    </button>
  );
};
