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

    const handleAddingPlace = () => {
        if (inputData === "" || image === "") {
            if (image === "") {
                alert("pick an Image")
            }
        }
        else {
            props.setAddData(
                [
                    {
                        key: Math.random().toString(),
                        value: inputData,
                        img: image
                    }]);
            setInputData("")
            setImage("")
            props.navigation.navigate("Find Places")
        }


    }

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
                        handleAddingPlace()
                    }} />
            </View>
        </View>
    )
}

export default connect(null, mapDispatchToProps)(SharePlaces)
