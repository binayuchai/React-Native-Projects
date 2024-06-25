import React from 'react';
import {View, Text, useColorScheme, StyleSheet, SafeAreaView} from 'react-native';

export default function AppPro(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <SafeAreaView style={styles.container}>

    <View>
      
      <Text style={isDarkMode ? styles.whiteText : styles.darkText}>
        React Native
      </Text>


    </View>

    </SafeAreaView>

   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  whiteText: {
    color: '#FFFFFF',
  },
  darkText: {
    color: '#000000',
  },
});
