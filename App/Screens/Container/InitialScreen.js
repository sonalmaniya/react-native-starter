import React, {Component} from 'react';
import {View} from 'react-native';
import {CommonActions} from '@react-navigation/native';
import UserService from '../../Services/UserService';

class InitialScreen extends Component {
  async componentDidMount() {
    const isLoggedIn = await UserService.isLoggedIn();
    if (!isLoggedIn) {
      this.goToNextScreen('Home');
      return;
    }
    this.goToNextScreen('Home');
  }

  goToNextScreen = async (nextScreen) => {
    const {navigation} = this.props;
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{name: nextScreen}],
      }),
    );
  };

  render() {
    return <View />;
  }
}

export default InitialScreen;
