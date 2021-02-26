import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Searchscreen from './screens/serachScreen'
import ReadStory from './screens/ExchangeScreen';
import WriteStory from './screens/HomeScreen'
import LoginScreen from './screens/LoginScreen'
export default class App extends React.Component {
  render(){
    return (

        <AppContainer/>

    );
  }
}
const TabNavigator = createBottomTabNavigator({
  Home: {screen: HomeScreen},
  Exchange: {screen: ExchangeScreen},
},
{
  defaultNavigationOptions: ({navigation})=>({
    tabBarIcon: ()=>{
      const routeName = navigation.state.routeName;
      console.log(routeName)
      if(routeName === "HomeScreen"){
        return(
        <Text>
          Home Screen
        </Text>
        )

      }
      else if(routeName === "ExchangeScreen"){
        return(
          <Text>
            Exchange Screen
          </Text>
        )

      }
    }
  })
}
);

const switchNavigator = createSwitchNavigator({
  LoginScreen:{screen: LoginScreen},
  TabNavigator:{screen: TabNavigator}
  })
  
  const AppContainer =  createAppContainer(switchNavigator);


 

