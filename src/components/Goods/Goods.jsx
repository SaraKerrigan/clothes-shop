import React from "react";

import styles from "./Goods.module.scss";
import Good from "../Good/Good";

export default function Goods({ listGoods = [], addGoodToCart }) {
  return (
    <div className={styles.container}>
      {listGoods.map((el) => {
        return (
          <Good
            addGoodToCart={addGoodToCart}
            key={el.id}
            id={el.id}
            image={el.image}
            title={el.title}
            price={el.price}

            // key={el.id} - обязательно ставить в метод map и нужно внести уникальное значение (при отрисовке компонента)
          />
        );
      })}
    </div>
  );
}

// продолжить загрузку данных и прелоадер
