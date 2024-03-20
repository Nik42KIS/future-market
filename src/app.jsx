import style from './app.module.scss';
import { Header } from './components/header/header';
import { Hero } from './components/hero/hero';

export function App() {
  return (
    <div className={style.container}>
      <Header />
      <Hero />
    </div>
  );
}
