import style from './app.module.scss';
import { useState } from 'react';
import { Header } from './components/header/header';
import { Hero } from './components/hero/hero';
import { PopUp } from './components/pop-up/pop-up';

import { useMediaQuery } from 'react-responsive';
import { HeaderMobile } from './mobile-version/header/header';
import { HeroMobile } from './mobile-version/hero/hero';

export function App() {
  const isMobile = useMediaQuery({
    query: '(max-width: 600px)',
  });

  const [activeModal, setActiveModal] = useState(false);
  return (
    <>
      {!!isMobile ? (
        <div className={style.container}>
          <HeaderMobile />
          <PopUp activeModal={activeModal} setActiveModal={setActiveModal} />
          <HeroMobile setActiveModal={setActiveModal} />
        </div>
      ) : (
        <div className={style.container}>
          <Header />
          <PopUp activeModal={activeModal} setActiveModal={setActiveModal} />
          <Hero setActiveModal={setActiveModal} />
        </div>
      )}
    </>
  );
}
