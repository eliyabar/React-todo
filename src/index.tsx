import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import * as serviceWorker from './serviceWorker';
import 'typeface-roboto';
import Box from '@material-ui/core/Box';

ReactDOM.render(
  <React.StrictMode>
      <Box m={0} width={'100vw'}>
          <App/>
      </Box>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
