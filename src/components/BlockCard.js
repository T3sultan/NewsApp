import React from 'react';
import { View, TextInput, StyleSheet, StatusBar, Image } from 'react-native';
import Title from './Title';
import SubTitle from './SubTitle';

const BlockCard = ({ style, imageStyle }) => {
    return (
        <View style={styles.container, style}>

            <Image source={require('../../assets/test.jpg')} style={styles.image} />
            <View style={styles.containContainer}>
                <Title >
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Magnam sunt placeat cum voluptatum iste quisquam quaerat,
                    ex molestiae architecto suscipit modi, ad, vitae
                    porro? Eius, eos neque. Labore, rerum aspernatur.
              </Title>
                <SubTitle>
                    Amet consectetur adipisicing elit.
                    Magnam sunt placeat cum voluptatum iste quisquam quaerat,
                    ex molestiae architecto suscipit modi, ad, vitae
                    porro? Eius, eos neque. Labore, rerum aspernatur.
              </SubTitle>
            </View>


        </View>

    )
}
const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 300,
        borderRadius: 10,
        overflow: 'hidden',
        backgroundColor: "#fff"
    },
    image: {
        width: '100%',
        height: 100,

    },
    containContainer: {
        padding: 10,
    }


});
export default BlockCard;