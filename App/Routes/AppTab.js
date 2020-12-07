import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../Screens/Components/Home/Home';
import Milestone from '../Screens/Components/Milestone/Milestone';
import Chat from '../Screens/Components/Chat/Chat';
import UserStack from './UserStack';
import TabComponent from './Tabbar';

const Tab = createBottomTabNavigator();

const AppTab = () => {
  return (
    <Tab.Navigator tabBar={(props) => <TabComponent {...props} />}>
      <Tab.Screen name="Tab1" component={Home} />
      <Tab.Screen name="Tab2" component={Milestone} />
      <Tab.Screen name="Tab3" component={Chat} />
      <Tab.Screen name="Tab4" component={UserStack} />
    </Tab.Navigator>
  );
};

export default AppTab;
