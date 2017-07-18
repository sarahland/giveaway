import React from 'react'
import {Router, Route, hashHistory} from 'react-router'
import Home from '../components/ui/Home'
import About from '../components/ui/About'
import DonateNow from '../components/ui/DonateNow'
import ItemList from '../components/ui/ItemList'
import SignIn from '../components/ui/SignIn'
import SignUp from '../components/ui/SignUp'
import * as firebase from 'firebase'
import {Left, Right, Whoops404} from '../components'
import { browserHistory } from 'react-router';

var config = {
 apiKey: "AIzaSyD8GFolNptpLVLoxAXcdDU0S1Jt8v6i_z4",
 authDomain: "giveaway-a0b3b.firebaseapp.com",
 databaseURL: "https://giveaway-a0b3b.firebaseio.com",
 projectId: "giveaway-a0b3b",
 storageBucket: "giveaway-a0b3b.appspot.com",
 messagingSenderId: "94459880442"
};
firebase.initializeApp(config);
//firebase = firebase.database().ref();
//var hashHistory = ReactRouter.hashHistory;
const routes = (
  <Router history={hashHistory}>

    <Route path="/" component={Home}/>
    <Route path="/" component={Left}>

      <Route path="about" component={About}/>
      <Route path="donatenow" component={DonateNow}/>
      <Route path="signin" component={SignIn} />
      <Route path="signup" component={SignUp} />
      <Route path="item" component={ItemList}/>
    </Route>
    <Route path="*" component={Whoops404}/>
  </Router>
);
export default routes;
