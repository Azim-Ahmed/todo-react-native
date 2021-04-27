import React from 'react'
import { View, Text, Modal, Image, Button } from 'react-native'

const PlaceModal = (props) => {
    console.log(props);
    return (
        <Modal>

            <View>
                <Text>{props.place.value}</Text>
                <Image source={props.place.img} style={{ width: "100%", height: 300 }} />
                <View>
                    <Button title="delete" />
                    {/* <Button title="close" onPress={() => props.handleHideModal()} /> */}
                </View>

            </View>
        </Modal>
    )
}

export default PlaceModal
