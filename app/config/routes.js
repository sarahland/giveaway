// import React from 'react'
// import {Router,BrowserRouter, Link, Redirect,Switch, Route, hashHistory} from 'react-router'
// import Home from '../components/ui/Home'
// import About from '../components/ui/About'
// import DonateNow from '../components/ui/DonateNow'
// import ItemList from '../components/ui/ItemList'
// import Electronics from '../components/ui/Electronics'
// import SignIn from '../components/ui/SignIn'
// import SignUp from '../components/ui/SignUp'
// //import auth from '../components/auth'
//
// //import Register from '../components/ui/Register'
// import {Left, Right, Whoops404} from '../components'
// import { browserHistory } from 'react-router';
//
// function PrivateRoute ({component: Component, authed, rest}) {
//   return (
//     <Route
//       {...res}
//       render={(props) => authed === true
//       ? <Component {...props} />
//     : <Redirect to={{pathname: '/SignIn', state: {from: props.location}}} />}
//   />
//   )
// }
// function PublicRoute ({component: Component, authed, rest}) {
//   return (
//     <Route
//       {...rest}
//       render={(props) => authed === false
//       ? <Component {...props} />
//       : <Redirect to='/Electronics' />}
//     />
//   )
// }
// export default class routes extends Component {
//   constructor(props) {
//   super(props);
//   this.state = {
//     authed: false,
//     loading: true,
//   }
// }
//   componentDidMount () {
//     this.removeListener = firebaseAuth().onAuthStateChanged((user) => {
//       if (user) {
//         this.setState({
//           authed: true,
//           loading: false,
//         })
//       } else {
//         this.setState({
//           authed: false,
//           loading: false
//         })
//       }
//     })
//   }
//   componentWillUnmount () {
//     this.removeListener()
//   }
// render() {
// return this.state.loading === true ? <h1> Mohammed....</h1> : (
// <BrowserRouter>
//
// <Switch>
//   <Router history={hashHistory}>
//     <Route path="/" component={Home}/>
//     <Route path="/" component={Left}>
//       <Route path="about" component={About}/>
//       <PrivateRoute authed={this.state.authed} path="donatenow" component={DonateNow}/>
//       <PublicRoute authed={this.state.authed} path="signin" component={SignIn} />
//       <PublicRoute authed={this.state.authed} path="signup" component={SignUp} />
//       <PrivateRoute authed={this.state.authed} path="item" component={ItemList}/>
//       <PrivateRoute authed={this.state.authed} path="electronics" component={Electronics}/>
//     </Route>
//     <Route path="*" component={Whoops404}/>
//   </Router>
// </Switch>
// </BrowserRouter>
// )
// }
// }

import React from 'react'
import {Router, Route, hashHistory} from 'react-router'
import Home from '../components/ui/Home'
import About from '../components/ui/About'
import DonateNow from '../components/ui/DonateNow'
import ItemList from '../components/ui/ItemList'
import Electronics from '../components/ui/Electronics'
import SignIn from '../components/ui/SignIn'
import SignUp from '../components/ui/SignUp'
import {Left, Right, Whoops404} from '../components'
import { browserHistory } from 'react-router';

const routes = (
  <Router history={hashHistory}>
    <Route path="/" component={Home}/>
    <Route path="/" component={Left}>
      <Route path="about" component={About}/>
      <Route path="donatenow" component={DonateNow}/>
      <Route path="signin" component={SignIn} />
      <Route path="signup" component={SignUp} />
      <Route path="item" component={ItemList}/>
      <Route path="electronics" component={Electronics}/>
    </Route>
    <Route path="*" component={Whoops404}/>
  </Router>
);
export default routes;
