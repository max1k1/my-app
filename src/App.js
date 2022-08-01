import React from "react";
import "./App.css";
import ProfileContent from "./components/ProfileContent/Profile";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";



const App = () => {
  return (
    <div className="app-wrapper">
      <Header/>
      <Navbar/> 
      <ProfileContent/>
    </div>
  );
};

export default App;
