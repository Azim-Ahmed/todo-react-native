import React, { useState } from 'react';
import { Button, StyleSheet, TextInput, View, Text, FlatList, ScrollView } from 'react-native';
import TextGrabber from './components/TextGrabber';
import TextSHower from './components/TextSHower';

export default function App() {
  const [inputData, setInputData] = useState('')
  const [addData, setAddData] = useState([])
  const ItemList = addData.map((item, i) => <TextSHower key={i} placeName={item} onItemPressed={() => alert(item)} />)

  return (
    <View
      style={styles.mainContainer}
    >
      <View style={styles.textContainer}>
        <TextInput onChangeText={(text) => setInputData(text)} placeholder="Write your Item to some data" style={styles.TextInputData} />
        <Button
          style={styles.inputButton}
          title="add more Item"
          onPress={() => setAddData(
            [...addData,
            {
              key: Math.random().toString(),
              value: inputData
            }])}>Add</Button>
      </View>

      <FlatList data={addData} renderItem={info => <TextSHower placeName={info.item.value} onItemPressed={() => alert(info.item.value)} />} />
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
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
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
