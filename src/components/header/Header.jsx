import cl from "./Header.module.scss";

const Header = () => {
  return (
    <header className={cl.header}>
      <div className="container">
        <div className={cl.wrapper}>
          <div className={cl.logo}>
            <img
              className={cl.logo__img}
              src="/images/header/logo.png"
              alt="header logo"
            />
            <div className={cl.logo__text}>
              <p>Оптовые поставки металлопроката по России и странам СНГ</p>
            </div>
          </div>
          <nav className={cl.header__nav}>
            <ul className={cl.nav__list}>
              <li className={cl.list__item}>О компании</li>
              <li className={cl.list__item}>Прайс-листы</li>
              <li className={cl.list__item}>Производство</li>
              <li className={cl.list__item}>Закупки</li>
              <li className={cl.list__item}>Контакты</li>
            </ul>
          </nav>
          <div className={cl.header__connection}>
            <a className={cl.connections__phone} href="tel:88009997977">
              <img className={cl.connections__phoneImg} src="/images/header/phone-call.png" alt="phone logo" />
              <span> 8 800 999 79 77</span>
            </a>
            <a className={cl.connection__text} href="#">
              Заказать звонок
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
