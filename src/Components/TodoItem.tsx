import CheckBox from '@react-native-community/checkbox';
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Button} from 'react-native-paper';
export default function TodoItem({task, deleteTask, toggleCompleted}) {
  return (
    <View style={styles.container}>
      <CheckBox
        // eslint-disable-next-line react-native/no-inline-styles
        style={{padding: 20, marginHorizontal: 10}}
        value={task.completed}
        onValueChange={() => toggleCompleted(task.id)}
      />
      <Text
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          color: 'black',
          textDecorationLine: task.completed ? 'line-through' : 'none',
        }}>
        {task.name}
      </Text>

      <Button
        mode="contained"
        style={styles.buttonSubmit}
        labelStyle={styles.buttonText}
        onPress={() => deleteTask(task.id)}
        buttonColor="grey">
        X
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'grey',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  buttonSubmit: {
    padding: 5,
    fontSize: 20,
    marginLeft: 10,
    backgroundColor: 'orange',
    borderRadius: 3,
  },
  text: {
    fontSize: 30,
  },
  buttonText: {
    fontSize: 22, // Adjust the font size as needed
    color: 'white', // Change the color of the text
    fontWeight: 'bold', // Make the text bold
  },
});
