import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import react, {useState} from 'react'
import Header from './components/Header';
import GameScreen from './screens/GameScreen';
import StartGameScreen from './screens/StartGameScreen';

export default function App() {
  const [gameMode, setGameMode] = useState(false);
  const [answer, setAnswer] = useState();

  const startGame = (answer) => {
    setAnswer(answer);
    setGameMode(true)
  }

  return (
    <View style={styles.container}>
      <Header title={"Guess A Number"}/>
      {gameMode ? <GameScreen /> : <StartGameScreen startGame={startGame}/>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
