import { Container, View } from 'native-base';
import * as React from 'react';
import {StyleSheet} from 'react-native'
import { Checkbox } from 'react-native-paper';

const MyComponent = () => {
  const [checked, setChecked] = React.useState(false);

  return (
      <View style={{flex:0.190, alignContent:'flex-end', justifyContent:'center'}}>
    <Checkbox.Item
    style={{}}
      status={checked ? 'checked' : 'unchecked'}
      onPress={() => {
        setChecked(!checked);
      }}
    /></View>
  );
};

export default MyComponent;