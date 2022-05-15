import React from "react";
import {BrowserRouter} from "react-router-dom";

import Main from "./Components/Main";
import Header from "./Components/Common/Header";
import SideBar from "./Components/Common/SideBar";
function App() {
  return (
    <BrowserRouter>
        <Header/>
        <SideBar/>
        <Main/>
    </BrowserRouter>
  );
}

export default App;
