import React from 'react';
import { View, Text } from 'react-native';

// import { Container } from './styles';

export default function ListItem({data}) {
  return (
    <View>
      <Text>{data.link}</Text>
    </View>
  );
}
