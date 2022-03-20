import './Main.scss';
import { useEffect, useState } from 'react';

import figure from '../../image/figure.png';
import client from '../../sanity';

export default function Main() {
  const [state, setState] = useState();

  useEffect(() => {
    client
      .fetch(
        `*[_type == "post"]{
       title,
       slug,
       body,
       mainImage{
         asset -> {
           _id,
           url
         },
         alt
       }
     }`,
      )
      .then((data) => {
        const item = {
          title: data[0].title,
          subtitle: data[0].slug.current,
        };
        setState(item);
      });
  }, []);

  return (
    <main className="main flex">
      <div className="main__title">
        <h1>{state && state.title}</h1>
        <p>{state && state.subtitle}</p>
        <button>Начать путешествие</button>
        <img className="figure" src={figure} alt="фигура" />
      </div>
      <section>
        <div tabIndex={1} className="block">
          <p>мы</p>
          <h2>1</h2>
          <p>на рынке</p>
        </div>
        <div tabIndex={1} className="block">
          <p>гарантируем</p>
          <h2>50%</h2>
          <p>безапасности</p>
        </div>
        <div tabIndex={1} className="block">
          <p>календарик за</p>
          <h2>2001г.</h2>
          <p>в подарок</p>
        </div>
        <div tabIndex={1} className="block">
          <p>путешествие</p>
          <h2>597</h2>
          <p>дней</p>
        </div>
      </section>
    </main>
  );
}
