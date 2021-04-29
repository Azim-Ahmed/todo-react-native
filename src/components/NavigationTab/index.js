import React from 'react'
import { View, Text, Button } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FindPlaces from '../FindPlaces';
import SharePlaces from '../SharePlaces';

const Tab = createBottomTabNavigator()

const NavigationTab = (props) => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Share Places" component={SharePlaces} />
            <Tab.Screen name="Find Places" component={FindPlaces} />
        </Tab.Navigator>
    )
}

export default NavigationTab
