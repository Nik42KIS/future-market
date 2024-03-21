import React from 'react';
import style from './checkbox.module.scss';

export const Checkbox = () => {
  return (
    <label className={style.checkboxContainer}>
      <input required type="checkbox" />
      <span className={style.checkmark}></span>
    </label>
  );
};
