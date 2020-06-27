import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Footer from "./Components/Footer";
import "react-simple-flex-grid/lib/main.css";

function App() {
  const [isSpinnerHidden, setIsSpinnerHidden] = useState(true);
  const [inputSearch, setInputSearch] = useState("");
  const [categorie, setCategorie] = useState({});

  const changeCategorie = (categorie) => {
    console.log(categorie);

    setCategorie(categorie);
  };
  const onChange = (e) => {
    setInputSearch(e.target.value);
    setIsSpinnerHidden(false);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setIsSpinnerHidden(true);
  };

  return (
    <>
      <Header
        onSubmit={onSubmit}
        onChange={onChange}
        categorie={categorie}
        setCategorie={changeCategorie}
        isSpinnerHidden={isSpinnerHidden}
      />
      <div className="container">
        <div>
          <Main
            setIsSpinnerHidden={setIsSpinnerHidden}
            categorie={categorie}
            query={inputSearch}
          ></Main>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default App;
