import React from 'react';

import './app.styles.scss';

import Header from './components/header/header.component';
import FirstPage from './components/first-page/first-page.component';
import SecondPage from './components/second-page/second-page.component';
import ThirdPage from './components/third-page/third-page.component';
import FourthPage from './components/fourth-page/fourth-page.component';
import UsersPage from './components/users-page/users-page.component';
import RegisterPage from './components/register-page/register-page.component';
import LastPage from './components/last-page/last-page.component';
import Footer from './components/footer/footer.component';

function App() {
  return (
    <div className="app">
      <Header />
      <FirstPage />
      <SecondPage />
      <ThirdPage />
      <FourthPage />
      <UsersPage />
      <RegisterPage />
      <LastPage />
      <Footer />
    </div>
  );
}

export default App;
