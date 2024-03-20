import { useEffect, useState, React } from 'react';
import style from './hero.module.scss';
import MENTOR from '../../assets/img/mentor2.png';
import VECTOR from '../../assets/icons/vector.svg';
import VECTOR_BLUE from '../../assets/icons/vector_blue.svg';

export const Hero = () => {
  const [amount, setAmount] = useState();
  const [dateSum, setDateSum] = useState();

  useEffect(() => {
    fetch('https://www.cbr-xml-daily.ru/daily_json.js')
      .then((res) => res.json())
      .then((res) => setAmount(Math.floor(res.Valute.GBP.Value)));

    function getSumOfDate() {
      const date = new Date();
      const [month, day, year] = [date.getMonth() + 1, date.getDate(), date.getFullYear()];
      const sum = month + '' + day + year;
      const result = sum.split('').reduce((total, current) => {
        return Number(total) + Number(current);
      }, 0);
      return result;
    }
    setDateSum(getSumOfDate());
  }, []);

  return (
    <main className={style.hero}>
      <section className={style.main_section}>
        <h1 className={style.title}>Создаю условия для вашего успеха</h1>
        <p className={style.description}>
          Когда ваше время и энергия лучше сфокусированы, стремление к новым возможностям становится
          реальностью, ваш успех зависит от ваших действий
        </p>
        <div className={style.buttons}>
          <button className={`${style.btn} ${style.reg_btn} `}>
            <span className={style.btn_name}>Записаться на консультацию</span>
            <span className={style.vector}>
              <img src={VECTOR_BLUE} alt="vector" />
            </span>
          </button>
          <button className={`${style.btn} ${style.free_btn} `}>
            <span className={style.btn_name}>Бесплатная консультация</span>
            <span className={style.vector}>
              <img src={VECTOR} alt="vector" />
            </span>
          </button>
        </div>
        <div className={style.info}>
          <div>
            <p>{amount}+</p>
            <span>техник для достижения цели</span>
          </div>
          <div>
            <p>{dateSum}%</p>
            <span>увеличение личной продуктивности</span>
          </div>
        </div>
      </section>
      <img className={style.mentor_img} src={MENTOR} alt="mentor" />
    </main>
  );
};
