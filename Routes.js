import React from 'react';
import {createStackNavigator, createAppContainer, createBottomTabNavigator, createDrawerNavigator} from 'react-navigation';
import Home from './src/Components/Home/Home';
import About from './src/Components/About/About';
import { Icon } from 'native-base';


const MainNavigator = createBottomTabNavigator({
  Home: {screen: Home},
  About: {screen: About},
},
{
  defaultNavigationOptions: ({navigation}) =>({
   tabBarIcon: ({}) =>{
     const {routeName} = navigation.state;
     let iconname='home';
     if(routeName === 'About')
     {
      iconname = 'american-football';
     }
     
     return <Icon name={iconname} />;
   }
    
  }),
  tabBarOptions: {
    activeTintColor: 'black',
    inactiveTintColor: 'gray',
  }
});
// const DrawerNavigator = createDrawerNavigator({
//   Home: {screen: Home},
//   About: {screen: About},
// },
// {
//   hideStatusBar: true,
//   drawerBackgroundColor: 'rgba(255,255,255,.9)',
//   overlayColor: '#6b52ae',
//   contentOptions: {
//     activeTintColor: '#fff',
//     activeBackgroundColor: '#6b52ae',
//   },
//   drawerType:"front"
// });

const Routes = createAppContainer(MainNavigator);

export default Routes;