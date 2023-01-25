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
          </>
            // <ProtectedRoute loggedIn={loggedIn}>
            // </ProtectedRoute>
          } />
          <Route path="/movies" element={<>
            <Header loggedIn={loggedIn} />
            <Movies /></>
            // <ProtectedRoute loggedIn={loggedIn}>
            // </ProtectedRoute>
          } />
          <Route path="/saved-movies" element={<>
            <Header loggedIn={loggedIn} />
            <SavedMovies /></>
            // <ProtectedRoute loggedIn={loggedIn}>
            // </ProtectedRoute>
          } />
        </Routes>

      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
