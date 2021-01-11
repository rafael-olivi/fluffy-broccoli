import React from 'react'
import Feed from './screens/Feed'
import { FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native';


const MenuRoutes = {
    Feed: {
        navigationOptions: {
            tabBarLabel: 'Feed',
            tabBarIcon: ({ color }) => 
                <FontAwesome name='home' size={30} color={color} />
        }
    },
    Add: {
        navigationOptions: {
            tabBarLabel: 'Add Picture',
            tabBarIcon: ({color}) => 
                <FontAwesome name='camera' size={30} color={color} />
        }
    },
    Profile: {
        navigationOptions: {
            tabBarLabel: 'Profile',
            tabBarIcon: ({color}) =>
                <FontAwesome name='user' size={30} color={color} />
        }
    }
}

const MenuNavigator = createBottomTabNavigator()

export default () => {
    return(
        <NavigationContainer>
            <MenuNavigator.Navigator 
                tabBarOptions= {{showLabel: false}} initialRouteName='Feed' >
                <MenuNavigator.Screen name='Feed' component={Feed}  options={MenuRoutes.Feed.navigationOptions} />
                <MenuNavigator.Screen name='AddPhoto' component={Feed}  options={MenuRoutes.Add.navigationOptions} />
                <MenuNavigator.Screen name='Profile' component={Feed} options={MenuRoutes.Profile.navigationOptions}/>
            </MenuNavigator.Navigator >
        </NavigationContainer>
    )
}