import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
import { setAddData, deletePlaceData } from '../redux/actionCreator';
import FlatListSection from '../components/FlatListSection';
import InputSection from '../components/InputSection';
import PlaceModal from '../components/PlaceModal';


const mapStateToProps = state => {
    return {
        addData: state.addData
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setAddData: data => dispatch(setAddData(data)),
        deletePlaceData: key => dispatch(deletePlaceData(key))
    }
}
const MainComponent = (props) => {
    const [inputData, setInputData] = useState('')
    // const [addData, setAddData] = useState([])
    const [selectedModal, setSelectedModal] = useState(null)

    const handleSelectedModal = key => {
        const data = props.addData.find(data => data.key == key)
        setSelectedModal(data)
    }
    const handleDeleteItem = key => {
        // setAddData(props.addData.filter(data => data.key !== key))
        props.deletePlaceData(key)
        setSelectedModal(null)
    }
    const handleHideModal = () => {
        setSelectedModal(null)
    }

    let dataDetails = null;
    if (selectedModal !== null) {
        dataDetails = <PlaceModal
            place={selectedModal}
            handleDeleteItem={handleDeleteItem}
            handleHideModal={handleHideModal}
        />
    }
    return (
        <View
            style={styles.mainContainer}
        >
            {dataDetails}
            <InputSection
                inputData={inputData}
                setInputData={setInputData}
                addData={props.addData}
                setAddData={props.setAddData}
            />
            <FlatListSection
                addData={props.addData}
                handleSelectedModal={handleSelectedModal}
            />
            {/* <TextGrabber /> */}
        </View>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(MainComponent);

const styles = StyleSheet.create({
    mainContainer: {
        width: '100%',
        paddingTop: 25,
        paddingBottom: 10,
        paddingLeft: 10,
        paddingRight: 10
    },
});
