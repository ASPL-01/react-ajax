import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import App from './App';
import Home from './components/Home';
import About from './components/About';
import Faq from './components/Faq';
import Boxes from './components/boxes/Boxes';
import Random from './components/Random';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="random" component={Random} />
      <Route path="boxes" component={Boxes} />
      <Route path="about" component={About} />
      <Route path="faq" component={Faq} />
    </Route>
  </Router>,
  document.getElementById('root')
);
