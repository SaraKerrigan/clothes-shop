import { useState } from "react";
import "../node_modules/materialize-css/dist/css/materialize.min.css";
import "./App.css";
import Header from "./layouts/Header/Header";
import Footer from "./layouts/Footer/Footer";
import Main from "./layouts/Main/Main";

function App() {
  return (
    <div className="content">
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </div>
  );
}

export default App;

// создать компонеты по схеме и вывести  список товаров и прелоадер
