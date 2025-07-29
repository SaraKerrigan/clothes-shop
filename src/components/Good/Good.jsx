import React from "react";
import styles from "./Good.module.scss";

export default function Good({id, image, title, price, addGoodToCart }) {
  return (
    <div className={`${styles.card} card`}>
      <div className="card-image waves-effect waves-block waves-light">
        <img className={`${styles.img} activator`} src={image} />
      </div>
      <div className={`card-content ${styles.content}`}>
        <span
          className={`${styles.title} card-title activator grey-text text-darken-4`}
        >
          {title}
        </span>
        <div className={styles.items}>
          <p className={styles.price}>{price}$</p>
          <a
            className="waves-effect waves-light btn-small blue"
            onClick={()=>addGoodToCart({id, title, price})}
          >
            BUY
          </a>
        </div>
      </div>
    </div>
  );
}
