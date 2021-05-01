import React from 'react'
import { View, Button, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const PicImage = (props) => {
    const handleImagePic = async () => {
        try {
            let result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.All,
                allowsEditing: true,
                aspect: [4, 3],
                quality: 1,
                base64: true
            })
            if (!result.cancelled) {
                props.setImage(`data:image/jpg;base64,${result.base64}`)
                // console.log("result", result);
                // props.setImage(result.uri)
            }
        } catch (error) {
            console.log("result", error);
        }
    }
    let showImage = null;
    if (props.image !== "") {
        showImage = <Image style={{ width: "100%", height: 200, marginBottom: 20 }} source={{ uri: props.image }} />
    }
    return (
        <View>
            {showImage}
            <Button onPress={handleImagePic} title="Pick an Image" />
        </View>
    )
}

export default PicImage
