import './App.css';
import Header from '../Header/Header';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from "../Footer/Footer";
import ProtectedRoute from '../ProtectedRoute';
import { useState } from 'react';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Profile from '../Profile/Profile';
import ErrorPage from '../ErrorPage/ErrorPage';


function App() {
  const [loggedIn, setLoggedIn] = useState(true);
  return (
    <div className="page">
      <BrowserRouter>
        <Routes>
          <Route path="/sign-in" element={<>
            {/* <Login isLoggedId={loggedIn} onLogin={login} /> */}
          </>} />
          <Route path="/sign-up" element={<></>
            // <Register onRegister={register} />
          } />
          <Route path="/" element={<>
            <Header loggedIn={loggedIn} isMainPage />
            <Main />
            <Footer />
          </>
            // <ProtectedRoute loggedIn={loggedIn}>
            // </ProtectedRoute>
          } />
          <Route path="/movies" element={<>
            <Header loggedIn={loggedIn} />
            <Movies />
            <Footer />
          </>
            // <ProtectedRoute loggedIn={loggedIn}>
            // </ProtectedRoute>
          } />
          <Route path="/saved-movies" element={<>
            <Header loggedIn={loggedIn} />
            <SavedMovies />
            <Footer />
          </>
            // <ProtectedRoute loggedIn={loggedIn}>
            // </ProtectedRoute>
          } />
          <Route path="/signin" element={<>
            <Login /></>
            // <ProtectedRoute loggedIn={loggedIn}>
            // </ProtectedRoute>
          } />
          <Route path="/signup" element={<>
            <Register /></>
            // <ProtectedRoute loggedIn={loggedIn}>
            // </ProtectedRoute>
          } />
          <Route path="/profile" element={<>
            <Header loggedIn={loggedIn} />
            <Profile />
          </>
            // <ProtectedRoute loggedIn={loggedIn}>
            // </ProtectedRoute>
          } />
            <Route path="/error/:id" element={<>
              <ErrorPage />
            </>
              // <ProtectedRoute loggedIn={loggedIn}>
              // </ProtectedRoute>
          } />
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
