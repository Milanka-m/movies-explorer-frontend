import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import './App.css';

import Header from '../Header/Header';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import NotFound from '../NotFound/NotFound';
import Footer from '../Footer/Footer';

function App() {
  const { pathname } = useLocation();

  return (
    <div className="page">
      <Header location={pathname} />
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>

        <Route exact path="/movies">
          <Movies
            location={pathname}
          />
        </Route>

        <Route exact path="/saved-movies">
          <SavedMovies />
        </Route>

        <Route exact path="/profile">
          <Profile />
        </Route>

        <Route exact path="/signup">
          <Register />
        </Route>

        <Route exact path="/signin">
          <Login />
        </Route>

        <Route exact path="/*">
          <NotFound />
        </Route>

      </Switch>
      <Footer />
    </div>
  );
}

export default App;