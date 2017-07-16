import React from 'react'
import React { Component } from 'react'
import firebase from 'firebase'
import loginPage from './loginPage'

export default class App extends Component {
  componentWillMount(){
    firebase.initializeApp({
    apiKey: "AIzaSyD8GFolNptpLVLoxAXcdDU0S1Jt8v6i_z4",
      authDomain: "giveaway-a0b3b.firebaseapp.com",
      databaseURL: "https://giveaway-a0b3b.firebaseio.com",
      projectId: "giveaway-a0b3b",
      storageBucket: "giveaway-a0b3b.appspot.com",
      messagingSenderId: "94459880442"

)};
}
  render() {
     return (
       <View style={styles.container}>
         <Login />
       </View>
     );
   }
 }

 const styles = StyleSheet.create({
   container: {
     flex: 1,
     justifyContent: 'center',
     alignItems: 'center',
     backgroundColor: '#F5FCFF',
   },
   welcome: {
     fontSize: 20,
     textAlign: 'center',
     margin: 10,
   },
   instructions: {
     textAlign: 'center',
     color: '#333333',
     marginBottom: 5,
   },
 });
