import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import FlatListSection from './components/FlatListSection';
import InputSection from './components/InputSection';
import PlaceModal from './components/PlaceModal';

export default function App() {
  const [inputData, setInputData] = useState('')
  const [addData, setAddData] = useState([])
  const [selectedModal, setSelectedModal] = useState(null)

  const handleSelectedModal = key => {
    const data = addData.find(data => data.key == key)
    setSelectedModal(data)
  }

  let dataDetails = null;
  if (selectedModal !== null) {
    dataDetails = <PlaceModal place={selectedModal} />
  }
  return (
    <View
      style={styles.mainContainer}
    >
      {dataDetails}
      <InputSection
        inputData={inputData}
        setInputData={setInputData}
        addData={addData}
        setAddData={setAddData}
      />
      <FlatListSection
        addData={addData}
        handleSelectedModal={handleSelectedModal}
      />
      {/* <TextGrabber /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    paddingTop: 25,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10
  },
});
