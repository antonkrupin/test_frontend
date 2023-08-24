import React from 'react';

import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

import Header from './components/Header/Header';
import Contacts from './routes/contacts';
import StartPage from './routes/startPage';
import UserAccount from './routes/userAccount';

import routes from './routes/routes';

import './App.css';

const App = () => (
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path={routes.startPagePath()} element={<StartPage />} />
      <Route path={routes.contactsPagePath()} element={<Contacts />} />
      <Route path={routes.userAccountPath()} element={<UserAccount />} />
    </Routes>
  </BrowserRouter>
);

export default App;
