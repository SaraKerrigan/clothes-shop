import React, { useEffect, useState } from "react";
import Goods from "../../components/Goods/Goods";
import Cart from "../../components/Cart/Cart";
import Preloader from "../../components/Preloader/Preloader";
import Alert from "../../components/Alert/Alert";
import Modal from "../../components/Modal/Modal";

export default function Main() {
  const [listGoods, setListGoods] = useState([]);
  // этот useState для подгрузки товаров с сервера

  const [cartGoods, setCartGoods] = useState([]);
  // этот useState для добавления товаров в корзину

  const quantityGoods = cartGoods.reduce((sum, el) => sum + el.quantity, 0);

  const [status, setStatus] = useState(true);

  const [textAlert, setTextAlert] = useState("");

  const [showModal, setShowModal] = useState(false);

  function resetAlert() {
    setTextAlert("");
  }

  function addGoodToCart(good) {
    const existGood = cartGoods.find((el) => el.id === good.id);

    if (!existGood) {
      const newGood = {
        id: good.id,
        title: good.title,
        price: good.price,
        quantity: 1,
      };
      setCartGoods([...cartGoods, newGood]);
    } else {
      const updatedGoods = cartGoods.map((el) => {
        if (el.id === good.id) {
          return { ...el, quantity: ++el.quantity };
          // ...el - запись всех ключей в новый объект, увеличение  значения конкретного ключа на единицу
        } else {
          return el;
        }
        // если в map есть if, то обязательно ставить else
      });

      setCartGoods(updatedGoods);
      // updatedGoods - если товар существует, то у него увеличивается quantity
    }

    setTextAlert(`${good.title} добавлен в корзину`);
  }

  // setCartGoods();

  function delGoodFromCart(good) {
    const currentGoods = cartGoods.filter((el) => {
      return el.id != good.id;
    });
    setCartGoods(currentGoods);
  }

  function plusGood(good) {
    const updatedGoods = cartGoods.map((el) => {
      if (el.id === good.id) {
        return { ...el, quantity: ++el.quantity };
        // el.quantity++ и ++el.quantity увеличивает на единицу, но ++в начале, переменная увеличивается сразу, а если в конце (el.quantity++), сначала возвращается старое значение
      } else {
        return el;
      }
    });
    setCartGoods(updatedGoods);
  }

  function minusGood(good) {
    const updatedGoods = cartGoods.map((el) => {
      if (el.id === good.id && el.quantity > 1) {
        return { ...el, quantity: --el.quantity };
      } else {
        return el;
      }
    });
    setCartGoods(updatedGoods);
  }

  function toggleModal() {
    !showModal ? setShowModal(true) : setShowModal(false);
    // setShowModal(!showModal)
  }

  function deleteAll() {
    setCartGoods([]);
    toggleModal();
    //  либо setShowModal(false);
  }

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/")
      .then((response) => response.json())
      .then((data) => {
        setListGoods(data);
        setStatus(false);
        //  setStatus(false) - загрузки больше нет
      });
  }, []);

  return (
    <>
      {showModal ? (
        <Modal
          cartGoods={cartGoods}
          delGoodFromCart={delGoodFromCart}
          toggleModal={toggleModal}
          plusGood={plusGood}
          minusGood={minusGood}
          deleteAll={deleteAll}
        />
      ) : (
        ""
      )}

      <Cart quantityGoods={quantityGoods} toggleModal={toggleModal} />

      {textAlert ? (
        <Alert textAlert={textAlert} resetAlert={resetAlert} />
      ) : (
        ""
      )}

      {status ? (
        <Preloader />
      ) : (
        <Goods addGoodToCart={addGoodToCart} listGoods={listGoods} />
      )}
    </>
  );
}
