import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icons from 'react-native-vector-icons/Ionicons'
import FindPlaces from '../FindPlaces';
import SharePlaces from '../SharePlaces';

const Tab = createBottomTabNavigator()

const NavigationTab = (props) => {
    return (
        <Tab.Navigator>

            <Tab.Screen
                name="Share Places"
                component={SharePlaces}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icons name="share-social" color={color} size={size} />
                    )
                }}
            />
            <Tab.Screen
                name="Find Places"
                component={FindPlaces}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icons name="md-map" color={color} size={size} />
                    )
                }}
            />

        </Tab.Navigator>
    )
}

export default NavigationTab
