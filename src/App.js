import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, TextInput, Button, Pressable } from 'react-native';
import styles from './Styles/style';

export default function App() {
  const [text, setText] = React.useState('');
  const [list, setList] = React.useState([]);

  return (
    <View style={styles.container}>
      <View>
        <Text style={ { fontSize: 30 } }>Minha Lista de Tarefas</Text>
        <Text>Adicione a tarefa a ser realizada</Text>
        <Text>Clique na tarefa para removela</Text>
        <Text>Precione e segure ma marcar com tarefa realizada</Text>
      </View>
      <TextInput
        style={styles.input}
        placeholder='Sua tarefa'
        value={text}
        onChangeText={setText}
      />
      <Button
        onPress={ (PressEvent) => {
          text.length ? setList([...list, { text, id: list.length, className: styles.text }]) : null;
          setText('');
        } }
        title="adicionar tarefa"
      />
      <View style={styles.tasksContainer}>
        {
          list.length ? list.map((task) => (
            <Pressable
              style={styles.task}
              key={task.id}
              onPress={ () => {
                list.splice(list.indexOf(task), 1);
                setList([...list])
              } }
              onLongPress={ () => {

                list[task.id].className = list[task.id].className === styles.text
                ? list[task.id].className = styles.completed
                : list[task.id].className = styles.text;
                setList([...list])
              } }
            >
              <Text
                style={task.className}
              >
                {task.text}
              </Text>
            </Pressable>
          )) : <Text>Lista Fazia</Text>
        }
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
