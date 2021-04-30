import React, { useState } from 'react'
import InputSection from '../InputSection';
import { connect } from 'react-redux'
import { setAddData } from '../../redux/actionCreator';
import { Button, View } from 'react-native';
import PicImage from '../PicImage';

const mapDispatchToProps = dispatch => {
    return {
        setAddData: data => dispatch(setAddData(data)),
    }
}

const SharePlaces = (props) => {
    const [inputData, setInputData] = useState('')
    const [image, setImage] = useState('')
    return (
        <View>
            <PicImage image={image} setImage={setImage} />
            <InputSection
                inputData={inputData}
                setInputData={setInputData}
            />
            <View style={{ alignItems: "center" }}>
                <Button
                    title="add more Item"
                    onPress={() => {
                        if (inputData !== "") {
                            props.setAddData(
                                [
                                    {
                                        key: Math.random().toString(),
                                        value: inputData,
                                        img: {
                                            uri: 'https://w7.pngwing.com/pngs/625/18/png-transparent-brown-wooden-bedroom-furniture-set-art-bedside-tables-metal-furniture-couch-furniture-angle-furniture-drawer.png'
                                        }
                                    }]);
                            setInputData("")
                        }
                    }} />
            </View>
        </View>
    )
}

export default connect(null, mapDispatchToProps)(SharePlaces)
