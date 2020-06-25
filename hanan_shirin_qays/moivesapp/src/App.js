import React,{useState} from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Footer from "./Components/Footer";

function App() {

  const [isSpinnerHidden, setIsSpinnerHidden] = useState(true);
  const [inputSearch, setInputSearch] = useState("");

  const onChange = (e) => {
    console.log(e.target.value);
    setInputSearch(e.target.value);
    setIsSpinnerHidden(false);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    alert(`Submitting Name ${inputSearch}`);
    console.log(inputSearch);

    setIsSpinnerHidden(true);
    // setInputSearch("");
  };




  return (
    <div className="page-container">
      <div className="content-wrap">
        <Header  onSubmit={onSubmit}
            onChange={onChange}
            isSpinnerHidden={isSpinnerHidden} />
        <Main query={inputSearch}/>
      </div>
      <Footer />
    </div>
  );
}
export default App;
