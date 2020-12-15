import 'react-native-gesture-handler';
import React from 'react';
import { Alert, StyleSheet } from 'react-native';
import Form4u from 'react-native-form4u';
import FormFields from '../form/FormFields';
import validationRules from '../form/FormValidationRules';

const Bookaseat = () => {
  const handleSubmit = (state) => {
    const {
      firstName, lastName, address, destination
    } = state;

    Alert.alert(
      'Your info',
      `First Name: ${firstName.value}\n Last Name: ${lastName.value}\n Address: ${
        address.value
      }\n Destination: ${destination.value} \n `,
    );
  };

  return (
    <Form4u
      formFields={FormFields}
      handleSubmit={handleSubmit}
      validation={validationRules}
      submitOnDirty
    />
  );
};

export default Bookaseat;