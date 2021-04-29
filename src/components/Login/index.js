import React from 'react'
import { View, Text, Button } from 'react-native'

const Login = (props) => {
    return (
        <View>
            <Text>
                Login Screen
            </Text>
            <View style={{ marginTop: 20 }}>
                <Button title="go to Nav" onPress={() => props.navigation.navigate('Home')} />
            </View>

            <View style={{ marginTop: 20 }}>
                <Button
                    title="go to Hotel Todo"
                    onPress={() => props.navigation.navigate('Hotel')}
                />
            </View>
        </View>
    )
}

export default Login
