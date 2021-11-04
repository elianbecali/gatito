import React from 'react';
import { TextInput } from 'react-native';

export default function CampoInteiro({ valor, onChangeText }) {
  const numberString = String(valor);

  return (
    <TextInput
      keyboardType="number-pad"
      onChangeText={onChangeText}
      value={numberString}
      selectTextOnFocus  
    />
  );
}