import React, { useEffect } from "react";
import styles from "./Modal.module.scss";
import { Flex } from "@radix-ui/themes";

export default function Modal({
  cartGoods,
  delGoodFromCart,
  toggleModal,
  plusGood,
  minusGood,
  deleteAll,
}) {
  const fullPrice = cartGoods.reduce((sum, el) => {
    return sum + el.price * el.quantity;
  }, 0);

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === "Escape") {
        toggleModal();
      }
    };

    document.addEventListener("keydown", handleEsc);

    return () => document.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.modal}>
        <Flex className={styles.top} justify={"between"}>
          <p className={styles.topText}>Basket</p>
          <button className={styles.topClose} onClick={toggleModal}>
            x
          </button>
        </Flex>
        {cartGoods.map((el) => {
          return (
            <Flex
              className={styles.items}
              key={el.id}
              justify={"between"}
              align={"center"}
            >
              <Flex gap={"3"} align={"center"}>
                {el.title.length > 50 ? (
                  <p>{el.title.slice(0, 50)}...</p>
                ) : (
                  <p>{el.title}</p>
                )}
                <p>{`x${el.quantity} = ${(el.quantity * el.price).toFixed(
                  2
                )}`}</p>
                <button className={styles.minus} onClick={() => minusGood(el)}>
                  -
                </button>
                <button className={styles.plus} onClick={() => plusGood(el)}>
                  +
                </button>
              </Flex>
              <button
                className={styles.itemsBtn}
                onClick={() => delGoodFromCart(el)}
              >
                <i class="material-icons">remove_shopping_cart</i>
              </button>
            </Flex>
          );
        })}
        <Flex className={styles.bottom} justify={"between"} align={"center"}>
          <Flex  justify={"start"} gap={"2"}>
            <p className={styles.bottomText}>Total price:</p>
            <p className={styles.bottomPrice}>{fullPrice.toLocaleString()} $</p>
          </Flex>
          <button className={styles.bottomBtn} onClick={deleteAll}>Delete all and close</button>
        </Flex>
      </div>
    </div>
  );
}
