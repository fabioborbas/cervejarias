import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Cabecalho from '../components/Cabecalho';
import Routes from '../routes';

function App() {


  return (
    <BrowserRouter>
      <Cabecalho />
      <Routes />
    </BrowserRouter>
  );
}

export default App;
