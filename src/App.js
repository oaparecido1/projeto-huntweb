import React from 'react';
import Routes from "./routes";

import { Normalize } from 'styled-normalize'

import Header from './components/Header/index';


function App() {
  return (
    <>
      <Normalize />
      <Header />
      <Routes />
    </>
  );
}

export default App;
