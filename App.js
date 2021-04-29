import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
// import MainComponent from './src/MainComponent';
import { store } from './src/redux/store';

import Login from './src/components/Login';
import NavigationTab from './src/components/NavigationTab';

const Stack = createStackNavigator()
export default function App() {

  return (
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Home" component={NavigationTab} />
        </Stack.Navigator>
        {/* <Login /> */}
        {/* <MainComponent /> */}
      </Provider>
    </NavigationContainer>

  );
}

