import React, { useEffect } from 'react';
import Router from './component/router/router';

import './style/style.css';


const App = () => {
  function setScreenSize() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }
  useEffect(() => {
    setScreenSize();
  });

  return (
    <>
      
      <Router />
    </>
  );
}

export default App;
