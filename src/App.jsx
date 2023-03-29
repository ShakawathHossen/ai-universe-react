import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./Component/Header/Header";
import Button from "./Component/Buttons/Button";
import Card from "./Component/Card/Card";

function App() { 
  return (
    <>
      <Header/>
      <Button>Sort By Date</Button>
      <Card/>
     
     
    </>
  );
}

export default App;
