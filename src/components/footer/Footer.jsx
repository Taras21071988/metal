import cl from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={cl.footer}>
      <div className="container">
        <div className={cl.footer__wrapper}>
          <div className={cl.footer__descr}>
            <div className={cl.footer__logoWrapper}>
              <img
                className={cl.logo__img}
                src="./public/images/footer/logo.png"
                alt="logo"
              />
              <h5 className={cl.logo__title}>Политика конфиденциальности</h5>
              <p className={cl.logo__text}>
                Вся предоставленная на сайте информация не является публичной
                офертой, определяемой положениями Статьи 437(2) Гражданского
                кодекса РФ.
              </p>
            </div>
            <div className={cl.footer__company}>
              <ul className={cl.company__list}>
                <span className={cl.list__title}>КОМПАНИЯ</span>
                <li className={cl.list__item}>Главная</li>
                <li className={cl.list__item}>О компании</li>
                <li className={cl.list__item}>Доставка и оплата</li>
              </ul>
            </div>
            <div className={cl.footer__catalog}>
              <h4 className={cl.catalog__title}>Каталог</h4>
              <ul className={cl.catalog__list}>
                <li className={cl.catalog__listItem}>Трубный прокат</li>
                <li className={cl.catalog__listItem}>
                  Трубопроводная арматура
                </li>
                <li className={cl.catalog__listItem}>Нержавеющий прокат</li>
                <li className={cl.catalog__listItem}>Чёрный прокат</li>
                <li className={cl.catalog__listItem}>Листовой прокат</li>
                <li className={cl.catalog__listItem}>Жаропрочный прокат</li>
                <li className={cl.catalog__listItem}>Металлоконструкции</li>
                <li className={cl.catalog__listItem}>Ферросплавы</li>
                <li className={cl.catalog__listItem}>Металлические порошки</li>
              </ul>
            </div>

            <div className={cl.footer__contacts}>
              <h4 className={cl.contact__title}>КОНТАКТЫ</h4>
              <a className={cl.contact__phone} href="tel:88009997977">
                8 800 999 79 77
              </a>
              <a className={cl.contact__mail} href="mailto:atomes@help.com">
                atomes@help.com
              </a>
              <a className={cl.contact__btn} href="#">
                ЗАКАЗТЬ ЗВОНОК
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className={cl.footer__license}>
        <div className="container">
          <div className={cl.footer__legal}>
            <p className={cl.legal__text}>
              © 2009-2020 ООО “Стальэнерго” Все права защищены
            </p>
            <div className={cl.legal__link}>
              <a className={cl.link__vk} href="#">
                <img src="./public/images/footer/vk.png" alt="vk logo" />
              </a>
              <a className={cl.link__instagram} href="#">
                <img
                  src="./public/images/footer/instagram.png"
                  alt="instagram logo"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
