import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#11a36a',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    height: 40,
    width: 400,
    margin: 10,
    padding: 10,
  },
  tasksContainer: {
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: 50,
    justifyContent: 'center',
    margin: 10,
    padding: 10,
    width: 400,
  },
  task: {
    backgroundColor: '#11a36a',
    margin: 5,
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
  },
  text: {
    textDecorationLine: 'none',
    fontSize: 20,
  },
  completed: {
    textDecorationLine: 'line-through',
    fontSize: 20,
  }
});

export default styles;
