import React from 'react';
import { View, StyleSheet } from 'react-native';

// Square component
const Square = ({ color }) => {
  return <View style={[styles.square, { backgroundColor: color }]} />;
};

const App = () => {
  return (
    <View style={styles.container}>
      <Square color="red" />
      <Square color="green" />
      <Square color="blue" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  square: {
    width: 100,
    height: 100,
    margin: 10,
  },
});

export default App;