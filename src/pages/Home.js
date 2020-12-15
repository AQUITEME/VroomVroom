import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, View, Text } from "react-native";
import FormButton from '../components/FormButton';

function Home(navigation) {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 48, fontStyle: 'italic', color: '#38B5FD', fontWeight: 'bold' }}>VroomVroom ,</Text>
      <Text style={styles.text}>An easy way to <C>prepare</C> and <C>organize</C> successful and safe ride</Text>

      <FormButton
        buttonTitle='Book a seat'
        onPress={() => navigation.navigate('Bookaseat')} />
    </View>
  );
}

const C = (props) => <Text style={{ color: '#38B5FD' }}>{props.children}</Text>

const styles = StyleSheet.create({
  container: {
    flex: 0.7,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 50,
    fontStyle: 'italic',
    fontWeight: 'bold',
    justifyContent: "center",
    alignItems: "center"
  },
  button: {
    width: 183,
    height: 52,
    overflow: "scroll",
    backgroundColor: "rgba(126,211,33,1)",
    marginTop: 434,
    marginLeft: 91
  }
});

export default Home;