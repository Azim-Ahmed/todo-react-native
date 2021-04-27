import React from 'react'
import { Button, StyleSheet, TextInput, View } from 'react-native';
// import CodeImage from '../../assets/Images/121138033.jpg'

const InputSection = (props) => {
    return (
        <View style={styles.textContainer}>
            <TextInput
                onChangeText={(text) =>
                    props.setInputData(text)}
                placeholder="Write your Item to some data"
                style={styles.TextInputData}
            />
            <Button
                style={styles.inputButton}
                title="add more Item"
                onPress={() => {
                    if (props.inputData !== "") {
                        props.setAddData(
                            [...props.addData,
                            {
                                key: Math.random().toString(),
                                value: props.inputData,
                                img: {
                                    uri: 'https://w7.pngwing.com/pngs/625/18/png-transparent-brown-wooden-bedroom-furniture-set-art-bedside-tables-metal-furniture-couch-furniture-angle-furniture-drawer.png'
                                }
                            }]);
                        props.setInputData("")
                    }
                }}>Add</Button>
        </View>
    )
}
export default InputSection;
const styles = StyleSheet.create({
    inputButton: {
        color: "black",
        backgroundColor: "cyan"
    },
    textContainer: {
        display: 'flex',
        flexDirection: "row"
    },
    TextInputData: {
        backgroundColor: "transparent",
        width: "60%",
        borderWidth: 1,
        paddingStart: 5
    }
});
