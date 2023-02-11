import './App.css';
import '../../vendor/normalize.css'
import Header from '../Header/Header';
import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Footer from "../Footer/Footer";
import { useState } from 'react';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Profile from '../Profile/Profile';
import ErrorPage from '../ErrorPage/ErrorPage';
import { useMainApi } from '../../utils/MainApi';
import ProtectedRoute from '../ProtectedRoute';
import { CurrentUserContext } from '../../utils/helpers';
import Preloader from '../Movies/Preloader/Preloader';



function App() {
  const [user, setUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);
  const apiInstance = useMainApi();

  const login = ({ email, password }) => {
    return apiInstance.authorize({ email, password }).then(({ token }) => {
      localStorage.setItem('token', token);
      setLoggedIn(true);
    })
  };

  const register = ({ email, password, name }) => {
    return apiInstance.register({ email, password, name }).then(({ token }) => {
      localStorage.setItem('token', token);
      setLoggedIn(true);
    })
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('search');
    setLoggedIn(false);
  };

  const saveUser = ({ email, name }) => {
    return apiInstance.updateUserInfo({ email, name }).then(user => {
      setUser(user);
    });
  };

  const checkToken = async () => {
    const token = localStorage.getItem('token');
    if (!token) {
      setLoading(false);
      return;
    }
    const data = await apiInstance.getUserInfo();
    if (data.email) {
      setLoggedIn(true);
      setUser(data);
    }
    setLoading(false);
  };

  useEffect(() => {
    checkToken();
  }, []);


  return (
    <div className="page">
      {loading ? <Preloader /> : <CurrentUserContext.Provider value={user}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<>
              <Header loggedIn={loggedIn} isMainPage />
              <Main />
              <Footer />
            </>
            } />
            <Route path="/movies" element={<ProtectedRoute loggedIn={loggedIn}>
              <Header loggedIn={loggedIn} />
              <Movies />
              <Footer />
            </ProtectedRoute>
            } />
            <Route path="/saved-movies" element={<ProtectedRoute loggedIn={loggedIn}>
              <Header loggedIn={loggedIn} />
              <SavedMovies />
              <Footer />
            </ProtectedRoute>
            } />
            <Route path="/signin" element={<ProtectedRoute loggedIn={!loggedIn}>
              <Login onLogin={login} />
            </ProtectedRoute>
            } />
            <Route path="/signup" element={<ProtectedRoute loggedIn={!loggedIn}>
              <Register onRegister={register} />
            </ProtectedRoute>
            } />
            <Route path="/profile" element={<ProtectedRoute loggedIn={loggedIn}>
              <Header loggedIn={loggedIn} />
              <Profile onLogout={logout} onSave={saveUser} />
            </ProtectedRoute>
            } />
            <Route path="/error/:id" element={<>
              <ErrorPage />
            </>
            } />
            <Route path="*" element={<>
              <Navigate to="/error/404" />
            </>
            } />
          </Routes>

        </BrowserRouter>
      </CurrentUserContext.Provider>}
    </div>
  );
}

export default App;
