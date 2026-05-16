import React from "react";
import Card from "./components/Card/card";
// import Tabel from "./components/Tabel/Tabel";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Forms from "./components/Docs/Forms";
import store from "./Store"; 
import { Provider } from "react-redux";
// import Docs from "./components/Docs";
function App() {
  return (
    <Provider store={store}>
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Tabel />} /> */}
        <Route path="/Home" element={<Home />} />
        <Route path="/Card" element={<Card />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Docs" element={<Forms />}/>
      </Routes>
      </BrowserRouter>
      </Provider>
  );
}
export default App;
