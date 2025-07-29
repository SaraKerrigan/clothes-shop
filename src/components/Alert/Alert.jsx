import React, { useEffect } from "react";
import styles from "./Alert.module.scss";

export default function Alert({ textAlert, resetAlert }) {
  useEffect(() => {
    const timeout = setTimeout(resetAlert, 3000);

    return () => clearTimeout(timeout);
    // return () => clearTimeout(timeout) - функция очистки
  }, [textAlert]);

  //   textAlert нужно записать в массив зависимостей, чтобы useEffect срабатывал каждый раз, когда textAlert изменится

  return <div className={styles.container}>{textAlert}</div>;
}
