import './App.css';
import '../../vendor/normalize.css'
import Header from '../Header/Header';
import React from 'react';
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



function App() {
  const [loggedIn, setLoggedIn] = useState(true);
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
          <Route path="/movies" element={<>
            <Header loggedIn={loggedIn} />
            <Movies />
            <Footer />
          </>
          } />
          <Route path="/saved-movies" element={<>
            <Header loggedIn={loggedIn} />
            <SavedMovies />
            <Footer />
          </>
          } />
          <Route path="/signin" element={<>
            <Login /></>
          } />
          <Route path="/signup" element={<>
            <Register /></>
          } />
          <Route path="/profile" element={<>
            <Header loggedIn={loggedIn} />
            <Profile />
          </>
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
