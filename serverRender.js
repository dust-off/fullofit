import React from 'react';
import reactDOMServer from 'react-dom/server';

import App from './src/components/App';

import axios from 'axios';
import config from './config';

const severRender = () => 
  axios.get(`${config.serverUrl}/api/contests`)
    .then(res => {
      return {
        initialMarkup: reactDOMServer.renderToString(
          <App initialContests={res.data.contests} />
        ),
        initialData: res.data.contests
      }; 
    })
    .catch(err => console.error(err));

export default severRender;