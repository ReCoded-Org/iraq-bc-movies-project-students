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
  const [category, setCategory] = useState({});

  const changeCategory = (category) => {
    console.log(category);
    setCategory(category);
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
    <div className="page-container">
      <div className="content-wrap">
        <Header
          onSubmit={onSubmit}
          onChange={onChange}
          category={category}
          setCategory={changeCategory}
          isSpinnerHidden={isSpinnerHidden}
        />
        <Main
          query={inputSearch}
          category={category}
          setIsSpinnerHidden={setIsSpinnerHidden}
        />
      </div>
      <Footer />
    </div>
  );
}
export default App;
