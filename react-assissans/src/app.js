import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar";
import Main from "./components/main";

function App() {
  function handleQuery(query) {
    const [query, setquery] = useState("");
  }
  return (
    <div>
      <Navbar />
      <Main />
    </div>
  );
}

export default App;
