import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import Color from '../constants/Color';

const CustomButton = ({ fn, text }) => {
  return (
    <View style={styles.okayButton}>
      <Button
        onPress={fn} 
        color={Color.deepBlue}
        title={text} />
    </View> 
  );
};

const styles = StyleSheet.create({
  okayButton:{
    backgroundColor: Color.vanilla,
    marginTop: 10,
    width: 100,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84, 
    borderRadius: 10
  }
})

export default CustomButton;