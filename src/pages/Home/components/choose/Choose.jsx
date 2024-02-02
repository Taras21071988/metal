import { useEffect, useState } from "react";
import cl from "./Choose.module.scss";
import axios from "axios";

const Choose = () => {
  const [choose, setChoose] = useState([]);

  useEffect(() => {
    axios.get("./../public/server/data.json").then((res) => {
      setChoose(res.data.choose);
    });
  }, []);

  return (
    <section className={cl.choose}>
      <div className="container">
        <div className={cl.choose__wrapper}>
          <h1 className={cl.choose__title}>ПОЧЕМУ ВЫБИРАЮТ НАС?</h1>
          <ul className={cl.choose__list}>
            {choose.map((choos) => (
              <li key={choos.id} className={cl.list__item}>
                <img
                  className={cl.item__img}
                  src={choos.img}
                  alt=" choose list image"
                />
                <p className={cl.list__text}>{choos.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Choose;
