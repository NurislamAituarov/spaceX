import './BurgerMenu.scss';

export default function BurgerMenu({ click }) {
  return (
    <div className="container__hamburger">
      <input type="checkbox" id="checkbox4" className="checkbox4 visuallyHidden" />
      <label htmlFor="checkbox4">
        <div onClick={click} className="hamburger hamburger4">
          <span className="bar bar1"></span>
          <span className="bar bar2"></span>
          <span className="bar bar3"></span>
          <span className="bar bar4"></span>
          <span className="bar bar5"></span>
        </div>
      </label>
    </div>
  );
}
