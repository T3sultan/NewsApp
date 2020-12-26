import React from 'react';
import {View,TextInput,StyleSheet,StatusBar, Image} from 'react-native';
import Title from './Title';
import SubTitle from './SubTitle';
 
const BlockCard =()=>{
    return(
        <View style={styles.container}>
          
          <Image source={require('../../assets/test.jpg')} style={styles.image}/>
          <View style={styles.containContainer}>
              <Title>Some Title</Title>
              <SubTitle>Some Description</SubTitle>
          </View>
        
            
        </View>

    )
}
const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:300,
        borderRadius:10,
        overflow:'hidden',
        backgroundColor:"#fff"
    },
    image:{
        width:'100%',
        height:200,

    },
    containContainer:{
        padding:10,
    }

   
});
export default BlockCard;