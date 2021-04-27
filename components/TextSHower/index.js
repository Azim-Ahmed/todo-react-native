import React from 'react'
import { View, Text, TouchableHighlight } from 'react-native'

const TextSHower = ({ placeName, onItemPressed, }) => {
    return (
        <TouchableHighlight onPress={onItemPressed}>
            <View style={{ height: 40, padding: 20, color: 'white', marginLeft: 20, backgroundColor: 'cyan', marginBottom: 20 }} >
                <Text >{placeName}</Text>
            </View>
        </TouchableHighlight>
    )
}

export default TextSHower
