import React from 'react'
import { View, Text, Modal, Image, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

const PlaceModal = (props) => {
    console.log(props);
    return (
        <Modal>

            <View style={{ width: "100%" }} >

                <Image source={props.place.img} style={{ width: "100%", height: 300 }} />
                <Text style={{ fontSize: 40, textAlign: 'center' }}>{props.place.value}</Text>
                <View style={{ alignItems: "center" }}>
                    <TouchableOpacity
                        onPress={() => props.handleDeleteItem(props.place.key)}>
                        <Icon name="trash" size={30} color="red" />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => props.handleHideModal()}>
                        <Icon name="times-circle" size={30} />
                    </TouchableOpacity>
                </View>

            </View>
        </Modal>
    )
}

export default PlaceModal
