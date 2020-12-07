import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import UserProfileContainer from '../Screens/Container/User/UserProfileContainer';

const Stack = createStackNavigator();

const UserStack = () => {
  return (
    <Stack.Navigator
      screenOptions={({route, navigation, theme}) => ({
        headerShown: true,
        cardOverlayEnabled: true,
        headerBackTitleVisible: false,
      })}
      mode="screen">
      <Stack.Screen
        name={'Profile'}
        component={UserProfileContainer}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default UserStack;
