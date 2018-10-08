import React from 'react';
import { FlatList, View, Text, StyleSheet } from 'react-native';
import PeopleListItem from './PeopleListItem';


const PeopleList = props => {
    const { peoples, onPressItem } = props;

    return (
        <FlatList style={styles.container}
            data={peoples}
            renderItem={({ item }) => (
                <PeopleListItem
                    people={item}
                    navigateToPeopleDetail={onPressItem} />
            )}
            keyExtractor={(item, i) => item.name.first + i} />
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#e2f9ff'
    },

});

export default PeopleList;