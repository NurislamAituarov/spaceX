import './Main.scss';
import { useEffect, useState } from 'react';

import figure from '../../image/figure.png';
import { getResource } from '../../api';

export default function Main() {
  const [state, setState] = useState();
  const [block, setBlock] = useState();

  useEffect(() => {
    getResource().then((data) => {
      setState(data);
      setBlock(data[2].slug.current.split(','));
    });
  }, []);

  return (
    <main className="main flex">
      {state && (
        <div className="main__title">
          <h1>{state[1].title}</h1>
          <p>{state[1].slug.current}</p>
          <button>{state[0].title}</button>
          <img className="figure" src={figure} alt="фигура" />
        </div>
      )}
      {block && (
        <section>
          <div tabIndex={1} className="block">
            <p>мы</p>
            <h2>{block[0]}</h2>
            <p>на рынке</p>
          </div>
          <div tabIndex={1} className="block">
            <p>гарантируем</p>
            <h2>{block[1]}</h2>
            <p>безапасности</p>
          </div>
          <div tabIndex={1} className="block">
            <p>календарик за</p>
            <h2>{block[2]}.</h2>
            <p>в подарок</p>
          </div>
          <div tabIndex={1} className="block">
            <p>путешествие</p>
            <h2>{block[3]}</h2>
            <p>дней</p>
          </div>
        </section>
      )}
    </main>
  );
}
