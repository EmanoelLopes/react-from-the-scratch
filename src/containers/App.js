import React from 'react';
import { hot } from 'react-hot-loader';
import CssBaseline from '@material-ui/core/CssBaseline';

function App() {
  return (
    <React.Fragment>
      <CssBaseline>
        <div className="app-wrapper">
          <h1>🚀 React App 🚀</h1>
        </div>
      </CssBaseline>
    </React.Fragment>
  );
}

export default hot(module)(App);
