import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'

const TextSHower = ({ placeName, onItemPressed, image }) => {
    return (
        <TouchableOpacity onLongPress={onItemPressed}>
            <View style={{
                padding: 20,
                color: 'white',
                marginLeft: 20,
                width: "100%",
                backgroundColor: '#fee',
                marginBottom: 20,
                flexDirection: "row"

            }} >
                <Image source={image} style={{ height: 50, width: 50 }} />
                <Text >{placeName}</Text>

            </View>
        </TouchableOpacity>
    )
}

export default TextSHower
