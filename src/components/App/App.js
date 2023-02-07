import './App.css';
import '../../vendor/normalize.css'
import Header from '../Header/Header';
import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
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



function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const apiInstance = useMainApi();

  const login = ({ email, password }) => {
    return apiInstance.authorize({ email, password }).then(token => {
      localStorage.setItem('token', token);
      setLoggedIn(true);
    })
  };

  const register = ({ email, password, name }) => {
    return apiInstance.register({ email, password, name })
  };

  const logout = () => {
    localStorage.removeItem('token');
    setLoggedIn(false);
  };

  const checkToken = async () => {
    const token = localStorage.getItem('token');
    if (!token) {
      return;
    }
    const { data } = await apiInstance.checkMe();
    if (data.email) {
      setLoggedIn(true);
    }
  };

  useEffect(() => {
    checkToken();
  }, [loggedIn]);


  return (
    <div className="page">
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
          <Route path="/signin" element={<>
            <Login onLogin={login} /></>
          } />
          <Route path="/signup" element={<>
            <Register onRegister={register} /></>
          } />
          <Route path="/profile" element={<ProtectedRoute loggedIn={loggedIn}>
            <Header loggedIn={loggedIn} />
            <Profile onLogout={logout} />
          </ProtectedRoute>
          } />
          <Route path="/error/:id" element={<>
            <ErrorPage />
          </>
          } />
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
