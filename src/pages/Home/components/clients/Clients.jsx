import cl from "./Clients.module.scss";

const Clients = () => {
  return (
    <section className={cl.clients}>
      <div className="container">
        <div className={cl.clients__wrapper}>
          <h1 className={cl.clients__title}>НАШИ КЛИЕНТЫ</h1>
          <ul className={cl.clients__list}>
            <li className={cl.list__item}>
              <a className={cl.item__link} href="#">
                <img
                  src="./public/images/clients/client1.png"
                  alt="clients link image"
                />
              </a>
            </li>
            <li className={cl.list__item}>
              <a className={cl.item__link} href="#">
                <img
                  src="./public/images/clients/client2.png"
                  alt="clients link image"
                />
              </a>
            </li>
            <li className={cl.list__item}>
              <a className={cl.item__link} href="#">
                <img
                  src="./public/images/clients/client3.png"
                  alt="clients link image"
                />
              </a>
            </li>
            <li className={cl.list__item}>
              <a className={cl.item__link} href="#">
                <img
                  src="./public/images/clients/client4.png"
                  alt="clients link image"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Clients;
