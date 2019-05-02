import React, { Component } from 'react';
import { View } from 'react-native';
import { Button, Card, CardSection } from './Common';

class LoginForm extends Component {
  render() {
    return (
      <Card>
        <CardSection />
        <CardSection />

        <CardSection>
        <Button>
          Login
        </Button>
        </CardSection>
      </Card>
    );
  }
}
export default LoginForm;