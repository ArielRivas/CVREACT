import './header.scss';
import HeaderSocials from './HeaderSocials';
import React from 'react';
const Header = () => {
    return (
      <header id="home">
        <div className="content">
  <div className="content__container">
    <p className="content__container__text">
      Hello
    </p>
    <ul className="content__container__list">
      <li className="content__container__list__item">world !</li>
      <li className="content__container__list__item">people !</li>
      <li className="content__container__list__item">users !</li>
      <li className="content__container__list__item">everybody !</li>
    </ul>
  </div>
</div>
        <div className="container header__container">
          <h2>Nice to meet you I'm</h2>
          <h1>Ariel Rivas Ferri</h1>
          <h3 className="text-light">Front-end Developer</h3>
          <a href="#contact" className="scroll__down">Scroll Down</a>
          <HeaderSocials />
        </div>
      </header>
    )
  }
  
  export default Header