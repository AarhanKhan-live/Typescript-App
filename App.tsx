import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LandingScreen  from './src/screens/LandingScreen';
import './src/constants/firebase'
import MainNav from './src/navigation/mainstack';

export default function App() {
  return (
    <MainNav/>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
