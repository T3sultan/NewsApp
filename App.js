import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SearchBar from './src/components/SearchBar';
import Screen from './src/components/Screen';
import BlockCard from './src/components/BlockCard'
import FeaturedNews from './src/components/FeaturedNews';
import SmallCard from './src/components/SmallCard';

export default function App() {
 return (
   <Screen>
     <SearchBar/>
    <FeaturedNews/>
    <SmallCard/>

   </Screen>
 )
 
}

