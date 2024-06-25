import {
  View,
  TextInput,
  StyleSheet,
  SafeAreaView,
  useColorScheme,
} from 'react-native';
import {
  Modal,
  Portal,
  Appbar,
  Button,
  Text,
  FAB,
  PaperProvider,
} from 'react-native-paper';

import React, {useState} from 'react';
import TodoItem from './TodoItem';
import {SafeAreaProvider} from 'react-native-safe-area-context';


export default function TodoList() {
  const [tasks, setTasks] = useState([
    {id: 1, name: 'First Work', completed: true},
    {id: 2, name: 'First Work', completed: false},
  ]);
  const [text, setText] = useState('');
  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  function addTask() {
    if (text === '') {
      return;
    }
    const newTask = {id: Date.now(), name: text, completed: false};
    setTasks([...tasks, newTask]);
    setText('');
    hideModal();
  }

  function deleteTask(id: number) {
    setTasks(tasks.filter(task => task.id !== id));
  }
  function toggleCompleted(id: number) {
    setTasks(
      tasks.map(task =>
        task.id === id ? {...task, completed: !task.completed} : task,
      ),
    );
  }
  const colorScheme = useColorScheme(); // Get the current color scheme

  const appBarStyle = {
    backgroundColor: colorScheme === 'dark' ? 'black' : 'white',
  };

  //
  return (
    <PaperProvider>
      <SafeAreaProvider>
        <SafeAreaView
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            flex: 1,
            backgroundColor: colorScheme === 'dark' ? 'black' : 'white',
          }}>
          <Appbar.Header style={appBarStyle}>
            <Appbar.Content
              title="Todo App"
              // eslint-disable-next-line react-native/no-inline-styles
              titleStyle={{
                color: colorScheme === 'dark' ? 'white' : 'black',
                textAlign: 'center',
              }}
            />
          </Appbar.Header>

          <View>
            {tasks.map(task => (
              <TodoItem
                key={task.id}
                task={task}
                deleteTask={deleteTask}
                toggleCompleted={toggleCompleted}
              />
            ))}
          </View>

          <Portal>
            <Modal
              visible={visible}
              onDismiss={hideModal}
              contentContainerStyle={styles.modalContainer}>
              <View>
                <Text style={styles.title}>Add Task</Text>
                <TextInput
                  // eslint-disable-next-line react-native/no-inline-styles
                  style={{textAlign: 'center', backgroundColor: 'grey'}}
                  value={text}
                  onChangeText={setText}
                  placeholder=" New task"
                />
                <Button
                  onPress={addTask}
                  style={{backgroundColor: 'blue', marginHorizontal: 'auto'}}>
                  Submit
                </Button>
              </View>
            </Modal>
          </Portal>
          <FAB
            style={styles.fab}
            size="medium"
            onPress={showModal}
            color="white"
            label="Add"
          />
        </SafeAreaView>
      </SafeAreaProvider>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
  },
  addData: {
    paddingTop: 20,
    marginTop: 50,
  },
  btnText: {
    color: 'white',
  },
  modalContainer: {
    backgroundColor: 'grey',
    paddingVertical: 40,
    margin: 20,
    borderRadius: 10,
  },
  title: {
    color: 'white',
    fontSize: 30,
    textAlign: 'center',
    paddingVertical: 20,
  },

  fab: {
    position: 'absolute',
    right: 16,
    bottom: 16,
    backgroundColor: 'green',
  },
});
