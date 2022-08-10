import React from "react";
import "./App.css";
import ProfileContent from "./components/ProfileContent/Profile";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Dialogs from "./components/Dialogs/Dialogs";


const App = () => {
  return (
    <div className="app-wrapper">
      <Header/>
      <Navbar/> 
      <div className="app-wrapper-content">
      {/* <Dialogs/> */}
      <ProfileContent/>
      </div>
    </div>
  ); 
};

export default App;
