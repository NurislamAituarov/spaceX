import './Main.scss';
import { useEffect, useState } from 'react';

import figure from '../../image/figure.png';
import { getResource } from '../../api';

export default function Main() {
  const [state, setState] = useState({
    title: '',
    subtitle: '',
    start: '',
    card: [],
  });

  useEffect(() => {
    getResource().then((data) => {
      setState(() => {
        const card = data[0].body[0].children[0].text.split(',');
        const item = {
          title: data[0].title,
          subtitle: data[0].slug.current,
          start: card[0],
          card: [card[1], card[2], card[3], card[4]],
        };
        return item;
      });
    });
  }, []);

  return (
    <main className="main flex">
      {!!state.title && (
        <div className="main__title">
          <h1>{state.title}</h1>
          <p>{state.subtitle}</p>
          <button>{state.start}</button>
          <img className="figure" src={figure} alt="фигура" />
        </div>
      )}
      {!!state.card.length && (
        <section>
          <div tabIndex={1} className="block">
            <p>мы</p>
            <h2>{state.card[0]}</h2>
            <p>на рынке</p>
          </div>
          <div tabIndex={1} className="block">
            <p>гарантируем</p>
            <h2>{state.card[1]}</h2>
            <p>безапасности</p>
          </div>
          <div tabIndex={1} className="block">
            <p>календарик за</p>
            <h2>{state.card[2]}.</h2>
            <p>в подарок</p>
          </div>
          <div tabIndex={1} className="block">
            <p>путешествие</p>
            <h2>{state.card[3]}</h2>
            <p>дней</p>
          </div>
        </section>
      )}
    </main>
  );
}
