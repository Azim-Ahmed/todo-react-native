import React from 'react'
import { View, Text, TouchableHighlight, TouchableOpacity } from 'react-native'

const TextSHower = ({ placeName, onItemPressed, }) => {
    return (
        <TouchableOpacity onLongPress={onItemPressed}>
            <View style={{ height: 40, padding: 20, color: 'white', marginLeft: 20, backgroundColor: 'cyan', marginBottom: 20 }} >
                <Text >{placeName}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default TextSHower
