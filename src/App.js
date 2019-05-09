import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './Components/Common';
import LoginForm from './Components/LoginForm';

class App extends Component {
  state = { loggedIn: null}

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDM3EREbY2eu33Z2idTYJuNJ_E-dYkUV4o',
      authDomain: 'authentication-db5a7.firebaseapp.com',
      databaseURL: 'https://authentication-db5a7.firebaseio.com',
      projectId: 'authentication-db5a7',
      storageBucket: 'authentication-db5a7.appspot.com',
      messagingSenderId: '581707649529',
      // appId: '1:581707649529:web:fec43efd2838e419'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true})
      } else {
        this.setState({ loggedIn: false})
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
        <Button onPress={() => firebase.auth().signOut()}>
        Log Out
        </Button>
        );
      case false:
        return <LoginForm />
      default:
        return <View>
          <Spinner size = 'large' />
          </View>
    }
  }

  render() {
    return (
      <View>
        <Header headerText='Authentication' />
        {this.renderContent()}
      </View>
    );
  }
}
export default App;