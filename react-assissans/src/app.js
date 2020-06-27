import React, { useState } from "react";
//sssssss "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar";
import Main from "./components/main";

function App() {
  const [query, setQuery] = useState("X");

  function handleQuery(query) {
    setQuery(query);
  }

  return (
    <div>
      <Navbar handleQuery={handleQuery} />
      <Main />
    </div>
  );
}

export default App;
