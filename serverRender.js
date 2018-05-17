import axios from 'axios';
import config from './config';

axios.get(`${config.serverUrl}/api/contests`)
  .then(res => {
    console.log(res.data);
  })
  .catch(err => console.error(err));