import './Header.scss';
import { motion } from 'framer-motion';
import cn from 'classnames';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useEffect, useState } from 'react';

import logo from '../../image/logo.png';
import BurgerMenu from '../Burger-menu/BurgerMenu';
import { getResource } from '../../api';

export default function Header() {
  const [state, setState] = useState();
  const [trigger, setTrigger] = useState(false);

  useEffect(() => {
    getResource().then((response) => setState(response[1].body[0].children[0].text.split(',')));
  }, []);

  function onShowMenu() {
    setTrigger(!trigger);
  }

  const variants = {
    visible: {
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.1,
      },
    },
    hidden: {},
  };

  return (
    <header className={cn('flex', { animate: trigger })}>
      <div className="header__logo">
        <LazyLoadImage effect="blur" src={logo} alt="spaceX" />
      </div>
      <NavMenu state={state} />
      <div className="header__hamburger">
        <BurgerMenu click={onShowMenu} />
      </div>
      {trigger && (
        <motion.div
          layout
          variants={variants}
          initial={'hidden'}
          animate={trigger ? 'visible' : 'hidden'}
          className="header__menu">
          <NavMenu state={state} />
        </motion.div>
      )}
    </header>
  );
}

function NavMenu({ state }) {
  const variantsChildren = {
    visible: {
      opacity: 1,
    },
    hidden: { opacity: 0 },
  };
  return (
    <nav>
      <ul>
        {state &&
          state.map((el, i) => {
            return (
              <motion.div variants={variantsChildren} key={i}>
                <li tabIndex={0}>{el}</li>
              </motion.div>
            );
          })}
      </ul>
    </nav>
  );
}
