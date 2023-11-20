import React, { Component, Suspense, lazy } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Routes, Route, HashRouter, Navigate } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import { connect } from 'react-redux';
import Preloader from './components/common/Preloader/Preloader';
import { initializeApp } from './redux/app-reducer';
import store from './redux/store';
import { Provider } from 'react-redux';
import { withRouter } from './hoc/withRouter';
import ProfileContainerWithHooks from './components/ProfileContent/ProfileContainerWithHooks';
import UsersContainerWithHooks from './components/Users/UsersContainerWithHooks';
const DialogsContainer = lazy(() => import('./components/Dialogs/DialogsContainer'));
class App extends Component {
  componentDidMount() {
    this.props.initializeApp();
  }
  render() {
    if (!this.props.initialized) {
      return <Preloader />;
    }
    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <div className="app-wrapper-content">
          <Navbar />
          <Suspense fallback={<Preloader />}>
            <Routes>
              <Route path="/profile" element={<ProfileContainerWithHooks />}>
                <Route path=":userId" element={<ProfileContainerWithHooks />} />
              </Route>
              <Route exact path="/" element={<Navigate to={'/profile'} />} />
              <Route path="/dialogs/*" element={<DialogsContainer />} />
              <Route path="/users/*" element={<UsersContainerWithHooks />} />
              <Route path="/news/*" element={<News />} />
              <Route path="/music/*" element={<Music />} />
              <Route path="/settings/*" element={<Settings />} />
              <Route exact path="/login/*" element={<Login />} />
              <Route path="*" element={<div>404 NOT FOUND</div>} />
            </Routes>
          </Suspense>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
});
let AppContainer = withRouter(connect(mapStateToProps, { initializeApp })(App));

export const SocialNetworkApp = (props) => {
  // using HashRouter instead BrowserRouter - trouble with gh-pages
  return (
    <HashRouter>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </HashRouter>
  );
};
