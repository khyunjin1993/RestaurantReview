import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation'
import RestaurantList from 'components/RestaurantList'
import RestaurantInfo from 'components/RestaurantInfo'

const AppNavigator = createStackNavigator({
    Home: {screen: RestaurantList},
    Info: { screen:  RestaurantInfo}
  }, {
      defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: '#0066CC',
            color: '#FFF'
        },
        headerTintColor: '#FFF',
        headerTitleStyle: {
            color: '#FFF'
        }
      }
  });
  
  
  export default createAppContainer(AppNavigator);