import { useEffect, useState } from 'react';
import style from './hero.module.scss';
import MENTOR from '../../assets/img/mentor2.png';
import { Button } from '../button/button';
import { getData, getSumOfDate } from '../../functions/functions';

export const HeroMobile = ({setActiveModal}) => {
  const [amount, setAmount] = useState();
  const [dateSum, setDateSum] = useState();

  useEffect(() => {
    getData().then(res => setAmount(Math.floor(res.Valute.GBP.Value)))
    setDateSum(getSumOfDate());
  }, []);

  return (
    <main className={style.hero}>
      <section className={style.main_section}>
        <h1 className={style.title}>Создаю условия для вашего успеха</h1>
        <p className={style.description}>
        Ваш успех зависит от ваших действий
        </p>
        <div className={style.buttons}>
          <Button action={setActiveModal} text="Записаться" bg="white" />
          <Button action={setActiveModal} text="Заказать звонок" bg="transp" />
         
        </div>
        <div className={style.info}>
          <div>
            <p>{amount}+</p>
            <span>техники</span>
          </div>
          <div>
            <p>{dateSum}%</p>
            <span>продуктивности</span>
          </div>
        </div>
      </section>
      <img className={style.mentor_img} src={MENTOR} alt="mentor" />
    </main>
  );
};
