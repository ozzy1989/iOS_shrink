// AppNavigator.js

import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from './HomeScreen';
import ChatScreen from './ChatScreen';

const AppNavigator = createStackNavigator(
  {
    Home: { screen: HomeScreen },
    Chat: { screen: ChatScreen },
  },
  {
    initialRouteName: 'Home', // Set the initial screen
  }
);

export default AppNavigator;

