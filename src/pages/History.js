import 'react-native-gesture-handler';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function History () {
    return (
        <View style={styles.container}>
          <Text style={styles.text}>Welcome History</Text>
        </View>
      );
    }
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f1'
      },
      text: {
        fontSize: 20,
        color: '#333333'
      }
});

