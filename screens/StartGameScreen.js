import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Button, TouchableWithoutFeedback, Alert} from 'react-native'
import CustomButton from '../components/CustomButton';
import Color from '../constants/Color';
import { closeKeyboard } from '../Utils/Utils';

const StartGameScreen = ({startGame}) => {

  const [inputNumber, setInputNumber] = useState('')
  const [selectedNumber, setSelectedNumber] = useState()
  const [selected, setSelected] = useState(false)
  const handleTextInput = text => {
    setInputNumber(text)
  }
  const resetNumber = () => {
    setSelected(false)
    setInputNumber("")
  }

  const updateSelectedNumber = () => {
    const currentNumber = parseInt(inputNumber);
    if (inputNumber > 0 && inputNumber < 100) {
      setSelectedNumber(currentNumber)
      setSelected(true);
      closeKeyboard()
    } else {
      Alert.alert(
        "Wrong Number!",
        "The Number has to be a number between from 1 to 99",
        [{ text: "OK", onPress: resetNumber}],
        { cancelable: false}
      );
    }

  }



  return (
    <TouchableWithoutFeedback onPress={closeKeyboard}>
      <View style={styles.screen}>
        <View style={styles.inputContainer}>
          <Text style={styles.inputNumberText}>Input Number</Text>
          <TextInput maxLength={2} onChangeText={handleTextInput} value={inputNumber} keyboardType="number-pad" style={styles.textInput} />
          <CustomButton text="OK" fn={updateSelectedNumber}/>
        </View>
      {selected &&
        <View style={styles.textContainer}>
          <Text style={styles.inputNumberText}>
            Your selected number is
          </Text>
          <Text style={styles.selectedNumber}>
            {selectedNumber}
          </Text>
          <Button title={"GAME START"} onPress={() => {
            startGame(selectedNumber)}}
          />
        </View>
      } 
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: Color.mainColor,
    alignItems: 'center',
    padding: 10,
    flex: 1,
  },
  inputContainer: {
    backgroundColor: Color.mainColor,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    padding: 20,
    width: 300,
    maxWidth: '80%',
    borderRadius: 5,
    elevation: 5,
    alignItems: 'center'
  },
  inputNumberText: {
    color: 'white'
  },
  textInput: {
    borderBottomColor: 'white',
    borderBottomWidth: 2,
    width: 50,
    textAlign: 'center',
    marginTop: 20,
    paddingBottom: 7,
    height: 35,
    fontSize:30,
    color: 'white'
  },
  textContainer:{
    marginTop: 50,
    alignItems: "center"
  },
  selectedNumber:{
    color: "white",
    fontSize: 30,
  }
})

export default StartGameScreen;