import React from 'react'
import {Router, Route, hashHistory} from 'react-router'
import Home from '../components/ui/Home'
import About from '../components/ui/About'
import DonateNow from '../components/ui/DonateNow'
import ItemList from '../components/ui/ItemList'
import {Left, Right, Whoops404} from '../components'

const routes = (
  <Router history={hashHistory}>
    <Route path="/" component={Home}/>
    <Route path="/" component={Left}>
      <Route path="about" component={About}/>
      <Route path="donatenow" component={DonateNow}/>
      <Route path="item" component={ItemList}/>
    </Route>
    <Route path="*" component={Whoops404}/>
  </Router>
);
export default routes;
