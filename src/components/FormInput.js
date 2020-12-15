import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { windowHeight, windowWidth } from '../components/utils/Dimensions';

export default function FormInput({ labelValue, placeholderText, ...rest }) {
  return (
    
    <View>
      <TextInput
        value={labelValue}
        style={styles.input}
        numberOfLines={1}
        placeholder={placeholderText}
        placeholderTextColor='#666'
        {...rest}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  input: {
    padding: 10,
    marginTop: 5,
    marginBottom: 10,
    width: windowWidth / 1.5,
    height: windowHeight / 15,
    fontSize: 16,
    borderRadius: 8,
    borderWidth: 1
  }
});