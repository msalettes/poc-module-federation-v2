import React from 'react';

import { BrowserRouter } from 'react-router-dom';
import Remote1 from '././remotes/Remote1';
import Remote2 from '././remotes/Remote2';

const App = () => {
  return (
    <BrowserRouter basename="/">
      <p>Remote 1: <Remote1 /></p>
      <p>Remote 2: <Remote2 /></p>
    </BrowserRouter>
  );
};

export default App;
