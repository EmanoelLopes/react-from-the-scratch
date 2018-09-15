import React from 'react';
import { hot } from 'react-hot-loader';
import SimpleAppBar from './SimpleAppBar';

function App() {
  return (
    <div className="app-wrapper">
      <SimpleAppBar />
    </div>
  );
}

export default hot(module)(App);
