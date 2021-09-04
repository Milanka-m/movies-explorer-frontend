import React from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { Route, Switch, Redirect, useLocation, withRouter, useHistory } from 'react-router-dom';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
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
import { 
  register, 
  authorize, 
  getUser, 
  updateUser, 
  getSavedMovies, 
  addMoviesCard, 
  removeMoviesCard } from '../../utils/MainApi';

function App() {
  const { pathname } = useLocation();
  const [currentUser, setCurrentUser] = React.useState({});
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [userMovies, setUserMovies] = React.useState([]);
  const [serverError, setServerError] = React.useState(null);
  
  const history = useHistory();

  function handleError(error) {
    console.log(error);
  }

  React.useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      tokenCheck(token);
    }
  }, [])

  function authorizeUser(email, password) {
    authorize(email, password)
      .then((res) => {
        if (res.token) {
          localStorage.setItem('token', res.token);
          tokenCheck(res.token);
          setServerError(null);
          history.push('/movies');
        }
      })
      .catch((err) => {
        if (err === 'Ошибка: 401') {
          setServerError(401);
        } else if (err === 'Ошибка: 400') {
          setServerError(400);
        }
        console.log(err);
      })
  }

  function handleLogin({ email, password }) {
    authorizeUser(email, password);
  }

  function tokenCheck(token) {
    return getUser(token)
      .then((userData) => {
        setCurrentUser(userData.user);
        setLoggedIn(true);
        getSavedMoviesCards();
      })
      .catch(handleError);
  }

  function handleRegister({ name, email, password }) {
    register(name, email, password)
      .then((res) => {
        setServerError(null);
        if (res) {
          authorizeUser(email, password);
        }
      })
      .catch((err) => {
        if (err === 'Ошибка: 409') {
          setServerError(409);
        }
        if (err === 'Ошибка: 400') {
          setServerError(400);
        }
        console.log(err);
      });
  }

  function handleLogout() {
    setCurrentUser({});
    setLoggedIn(false);
    localStorage.removeItem('token');
    history.push('/');
    setUserMovies([]);
  }

  function handleUpdateUser(newUserData) {
    updateUser(newUserData)
      .then(userData => {
        setCurrentUser(userData.user);
        setServerError(null);
      })
      .catch((err) => {
        if (err === 'Ошибка: 400') {
          setServerError(400);
        }
        console.log(err);
      });
  } 

  function handleMoviesSave(moviesData) {
    addMoviesCard(moviesData)
    .then(() => {
      getSavedMoviesCards();
    })
    .catch(handleError);
  };

  function getSavedMoviesCards() {
    getSavedMovies()
      .then((moviesCards) => {
        setUserMovies(moviesCards);
      })
      .catch(handleError);
  };


  function removeSavedMovie(id) {
    removeMoviesCard(id)
      .then((res) => {
        getSavedMoviesCards();
      })
      .catch(handleError);
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header 
          location={pathname}
          loggedIn={loggedIn}
        />
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>

          <ProtectedRoute 
            path="/movies"
            loggedIn={loggedIn}
          >
            <Movies
              location={pathname}
              onMovieSave={handleMoviesSave}
              onMovieDelete={removeSavedMovie}
              savedUserMovies={userMovies}
            />
          </ProtectedRoute>

          <ProtectedRoute 
            path="/saved-movies"
            loggedIn={loggedIn}
          >
            <SavedMovies 
              location={pathname}
              savedUserMovies={userMovies}
              loggedIn={loggedIn}
              onMovieDelete={removeSavedMovie}
            />
          </ProtectedRoute>

          <ProtectedRoute 
            path="/profile"
            loggedIn={loggedIn}
          >
            <Profile 
              onUpdateUser={handleUpdateUser}
              handleLogout={handleLogout}
              serverError={serverError}
            />
          </ProtectedRoute>

          <Route exact path="/signup">
            <Register 
              handleRegister={handleRegister} 
              serverError={serverError}
            />
          </Route>

          <Route exact path="/signin">
            <Login 
              handleLogin={handleLogin}
              serverError={serverError}
            />
          </Route>

           <Route>
            {loggedIn ? <Redirect to="/movies" /> : <Redirect to="/signin" />}
          </Route>

          <Route exact path="/*">
            <NotFound />
          </Route>

        </Switch>
        <Footer />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default withRouter(App);