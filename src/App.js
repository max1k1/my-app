import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./components/ProfileContent/Profile";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from './components/Dialogs/DialogsContainer';

const App = ({ store, dispatch, state }) => { 
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Routes>
            <Route
              path="/profile/*"
              element={
                <Profile store={store} dispatch={dispatch} />
              }
            />
            <Route
              path="/dialogs/*"
              element={
                <DialogsContainer store={store} dispatch={dispatch} />
              }
            />
            <Route path="/news/*" element={<News />} />
            <Route path="/music/*" element={<Music />} />
            <Route path="/settings/*" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
