import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header } from './Components/Common';
import LoginForm from './Components/LoginForm';

class App extends Component {

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDM3EREbY2eu33Z2idTYJuNJ_E-dYkUV4o',
      authDomain: 'authentication-db5a7.firebaseapp.com',
      databaseURL: 'https://authentication-db5a7.firebaseio.com',
      projectId: 'authentication-db5a7',
      storageBucket: 'authentication-db5a7.appspot.com',
      messagingSenderId: '581707649529',
      appId: '1:581707649529:web:fec43efd2838e419'
    });
  }

  render() {
    return (
      <View>
        <Header headerText='Authentication' />
        <LoginForm />
      </View>
    )
  }
}
export default App;