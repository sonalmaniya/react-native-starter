import InitialScreen from '../Screens/Container/InitialScreen';
import LoginContainer from '../Screens/Container/Login/LoginContainer';
import AppTab from './AppTab';

const Routes = [
  {
    name: 'InitialScreen',
    screen: InitialScreen,
    navigationOptions: {
      headerShown: false,
    },
  },
  {
    name: 'Login',
    screen: LoginContainer,
    navigationOptions: {
      headerShown: false,
    },
  },
  {
    name: 'Home',
    screen: AppTab,
    navigationOptions: {
      headerShown: false,
    },
  },
];

export default Routes;
