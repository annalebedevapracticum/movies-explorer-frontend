import './App.css';
import Header from '../Header/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProtectedRoute from '../ProtectedRoute';
import { useState } from 'react';
import Promo from '../Main/Promo/Promo';
import AboutProject from '../Main/AboutProject/AboutProject';
import Techs from '../Main/Techs/Techs';
import AboutMe from '../Main/AboutMe/AboutMe';
import Portfolio from '../Main/Portfolio/Portfolio';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <div className="page">
      <BrowserRouter>
        <Header
        />
        <div className="content">
          <Routes>
            <Route path="/sign-in" element={<>
              {/* <Login isLoggedId={loggedIn} onLogin={login} /> */}
            </>} />
            <Route path="/sign-up" element={<></>
              // <Register onRegister={register} />
            } />
            <Route path="/" element={<></>
              // <ProtectedRoute loggedIn={loggedIn}>
              // </ProtectedRoute>
            } />
          </Routes>
        </div>
      </BrowserRouter>
      <Promo />
      <AboutProject />
      <Techs />
      <AboutMe />
      <Portfolio />
    </div>
  );
}

export default App;
