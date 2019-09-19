import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import CardList from './CardList';
import 'tachyons';
import {robots} from './robots';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <App />, document.getElementById('root'));

serviceWorker.unregister();
