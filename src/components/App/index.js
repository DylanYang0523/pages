import React from 'react';
import 'normalize.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.scss';
import Header from 'my-components/Header';
import Footer from 'my-components/Footer';
import Landing from 'my-pages/Landing';

const App = () => {
  return (
    <div>
      <Header />
      <Landing />
      <Footer />
    </div>
  );
}

export default App;
