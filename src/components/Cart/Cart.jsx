import React from "react";
import styles from "./Cart.module.scss";

export default function Cart({ quantityGoods, toggleModal}) {
  return (
    <button className={styles.btn} onClick={toggleModal}>
      {/* в toggleModal нет аргументов, колбэк в onClick не нужен */}
      <i class="material-icons">shopping_cart</i>
      {quantityGoods === 0 ? (
        ""
      ) : (
        <span className={styles.span}>
          {quantityGoods > 99 ? "99+" : quantityGoods}
        </span>
      )}
    </button>
  );
}
