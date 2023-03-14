import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Dialogs from "./components/Dialogs/Dialogs";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./components/ProfileContent/Profile";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

const App = ({state, addPost, updateNewPostText, sendMessage, updateNewMessageText}) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Routes>
            <Route path="/profile/*" element={<Profile profilePage={state.profilePage} addPost={addPost} updateNewPostText={updateNewPostText}/>} />
            <Route path="/dialogs/*" element={<Dialogs dialogsPage={state.dialogsPage} sendMessage={sendMessage} updateNewMessageText={updateNewMessageText}/>} />
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
