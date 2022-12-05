import React from 'react';
import { Text } from 'react-native-paper';
import { View } from 'react-native';

export const Nom = (props) => {
  return (
    <View>
      <Text style={props.stilo}>{props.unNom}</Text>
    </View>
  );
}

