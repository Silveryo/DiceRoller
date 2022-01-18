import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";

export default function App() {
  const [DiceValue, setDiceValue] = useState(0);
  const onPress = () => setDiceValue(RollDice);

  return (
    <View style={styles.container}>
      <Image
        style={styles.diceIcon}
        source={require('./assets/dice.png')}
      />
      <Text style={styles.outputContainer}>
        Kostka byla hozena a padlo: {DiceValue}
      </Text>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text>Hodit kostku</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

function RollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
  },
  outputContainer: {
    alignItems: "center",
    padding: 10,
    fontSize: 20,
  },
  diceIcon: {
    width: 50,
    height: 50,
  },
});
