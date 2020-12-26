import React from 'react';
import {View,TextInput,StyleSheet} from 'react-native';
 
const SearchBar =()=>{
    return(
        <View style={styles.container}>
            <TextInput style={styles.searchInput} placeholder='Search here...'/>
        </View>

    )
}
const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:40,
        backgroundColor:"white",
        borderRadius:10,


    },
    searchInput:{
        width:'80%',
        height:'80%',
        paddingLeft:10,
        fontSize:16,



    }

});
export default SearchBar;