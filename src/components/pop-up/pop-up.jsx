import { useState } from 'react';
import style from './pop-up.module.scss';
import { Button } from '../button/button';
import EXIT_ICON from '../../assets/icons/exit_icon.png';
import { Checkbox } from '../checkbox/checkbox';
import { ResponseToSubmit } from '../response-to-submit/response-to-submit';

export const PopUp = ({ activeModal, setActiveModal }) => {
  const [submit, setSubmit] = useState(false);
  return (
    <div
      onClick={() => {
        setActiveModal(false);
        setSubmit(false);
      }}
      className={`${style.wrap} ${activeModal ? style.active : ''}`}>
      <div onClick={(e) => e.stopPropagation()} className={style.modal}>
        <button
          onClick={() => {
            setActiveModal(false);
            setSubmit(false);
          }}
          className={style.exit}>
          <img src={EXIT_ICON} alt="X" />
        </button>
        {submit === true ? (
          <ResponseToSubmit />
        ) : (
          <form onSubmit={() => setSubmit(true)} className={style.form}>
            <legend className={style.title}>Закажите обратный звонок</legend>
            <input
              required
              minLength={3}
              className={style.input}
              placeholder="ИМЯ"
              name="name"
              type="text"
            />
            <input
              required
              minLength={5}
              className={style.input}
              placeholder="ТЕЛЕФОН"
              name="phone"
              type="tel"
              pattern="^[\d+\-]+$"
            />
            <div className={style.check_wrap}>
              <Checkbox />
              <p>Согласен на сохранение и обработку персональных данных</p>
            </div>
            <Button sumbitAction={setSubmit} text="Заказаться обратный звонок" bg="transp" />
          </form>
        )}
      </div>
    </div>
  );
};
