import React from 'react'
import { View, Text, Modal, Image, Button } from 'react-native'

const PlaceModal = (props) => {
    console.log(props);
    return (
        <Modal>

            <View style={{ width: "100%" }} >

                <Image source={props.place.img} style={{ width: "100%", height: 300 }} />
                <Text style={{ fontSize: 40, textAlign: 'center' }}>{props.place.value}</Text>
                <View>
                    <Button color='red' onPress={() => props.handleDeleteItem(props.place.key)} title="delete" />
                    <Button title="close" onPress={() => props.handleHideModal()} />
                </View>

            </View>
        </Modal>
    )
}

export default PlaceModal
