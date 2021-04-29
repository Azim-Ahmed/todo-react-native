import React from 'react'
import { FlatList } from 'react-native';
import TextSHower from '../TextSHower'

const FlatListSection = (props) => {
    return (
        <FlatList data={props.addData} renderItem={info => <TextSHower placeName={info.item.value} onItemPressed={() => props.handleSelectedModal(info.item.key)} image={info.item.img} />} />
    )
}

export default FlatListSection
