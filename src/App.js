import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
// import { TextInput } from 'react-native-web';

export default function App() {
  const [text, setText] = React.useState('');
  const [list, setList] = React.useState(['Criar todo list']);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder='Sua tarefa'
        value={text}
        onChangeText={setText}
      />
      <Button
        color="#11a36a"
        onPress={ () => {
          setText('');
          setList([...list, text]);
        } }
        title="adicionar tarefa"
      />
      { list.map((task) => <Text key={task}>{task}</Text>) }
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    width: 400,
    margin: 10,
    borderWidth: 1,
    padding: 10,
  },
});
