import React, {Component} from 'react';
import {Alert, SafeAreaView, TouchableOpacity} from 'react-native';
import {CommonActions} from '@react-navigation/native';
import {CustomText} from '../../CommonComponent';
import CommonStyle from '../../../Theme/CommonStyle';
import {AppContext} from '../../../AppContext';

class UserProfile extends Component {
  static contextType = AppContext;

  logout = () => {
    Alert.alert(
      '',
      'Do you want to logout?',
      [
        {
          text: 'No',
          style: 'cancel',
        },
        {
          text: 'Yes',
          style: 'destructive',
          onPress: this.onLogout,
        },
      ],
      {cancelable: true},
    );
  };

  onLogout = async () => {
    const {navigation} = this.props;
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{name: 'Login'}],
      }),
    );
    this.props.userLogout();
  };

  render() {
    const {appTheme} = this.context;
    return (
      <SafeAreaView
        style={[
          CommonStyle.flexContainer,
          CommonStyle.center,
          {backgroundColor: appTheme.background},
        ]}>
        <TouchableOpacity onPress={this.logout}>
          <CustomText large style={{color: appTheme.text}}>
            Log out
          </CustomText>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}

export default UserProfile;
