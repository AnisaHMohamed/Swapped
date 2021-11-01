import * as React from 'react';
import { StyleSheet } from 'react-native';

import { View } from '../components/Themed';
import { Button, Header, ThemeProvider } from 'react-native-elements';
import { useColorScheme } from 'react-native-appearance';


export function  Menu  () {
    let colorScheme = useColorScheme();

  return (

               <ThemeProvider  useDark={colorScheme === 'dark'}>
      <Header
  placement="left"
  leftComponent={{ icon: 'menu', color: '#fff' }}
  centerComponent={{ text: 'Swapped', style: { color: '#fff' } }}
  rightComponent={{ icon: 'home', color: '#fff' }}
/>
    </ThemeProvider>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'green'
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
