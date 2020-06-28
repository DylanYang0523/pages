import React from 'react';
import 'normalize.css';
import '/styles/global.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '/components/Footer';
import Landing from './Landing';

const App = () => {
  return (
    <div>
      <Landing />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
