import React, {Component} from 'react';
import {View, Text} from 'react-native';
import firebase from 'firebase';
import {Header, Button, Card, CardSection, Input, Spinner} from './common';

class LoginForm extends Component{
  state = { email: '', password: '', error: '', loading: false };

  onButtonPress() {
    console.log('button pressed');

    const {email, password} = this.state;

    this.setState({ error:'', loading: true });

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess.bind(this))
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(this.onLoginSuccess.bind(this))
        .catch(this.onLoginFailed.bind(this));
      });
  }

  onLoginFailed(){
    this.setState({
      loading:false,
      error:'Authentication Failed.'
    });
  }

  onLoginSuccess(){
    this.setState({
      email:'',
      password:'',
      loading:false,
      error:''
    });
  }

  renderButton(){
    if (this.state.loading){
      return <Spinner size="small"/>
    } else {
      return (
        <Button onPress={this.onButtonPress.bind(this)}>
          Log in
        </Button>
      )
    }
  }

  render() {
    return(
      <View>
        <Header headerText={'Login'} />
        <Card>
          <CardSection>
            <Input
              label="Email"
              placeholder="user@gmail.com"
              value={this.state.email}
              onChangeText={email => this.setState({ email })}
            />
          </CardSection>

          <CardSection>
            <Input
              placeholder="password"
              label="Password"
              secureTextEntry
              value={this.state.password}
              onChangeText={password => this.setState({ password })}
            />
          </CardSection>

          <Text style={styles.errorTextStyle}>
            {this.state.error}
          </Text>

          <CardSection>
            {this.renderButton()}
          </CardSection>
        </Card>
      </View>
    );
  }
};

const styles = {
  errorTextStyle: {
    fontSize:20,
    alignSelf:'center',
    color:'red'
  }
};

export default LoginForm;
