import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import {
  TextInput,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Button,
} from 'react-native';

const STORAGE_KEY = '@save_age';

export default () => {
  const [age, setAge] = useState({});
  console.log('age', age);

  useEffect(() => {
    getMyObject();
  }, []);

  const generateKey = (): string => {
    return `@${Math.random()}`;
  };

  const setObjectValue = async value => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem('key', jsonValue);
    } catch (e) {
      // save error
    }

    console.log('Done.');
  };

  // const saveData = async () => {
  //   try {
  //     await AsyncStorage.setItem(generateKey(), age);
  //   } catch (e) {
  //     console.error(e);
  //   }
  // };
  //
  // const readData = async () => {
  //   try {
  //     const userAge = await AsyncStorage.getAllKeys()
  //
  //     if (userAge !== null) {
  //       setAge(userAge);
  //     }
  //   } catch (e) {
  //     console.error(e);
  //   }
  // };

  // const onChangeText = (userAge: string) => setAge(userAge);
  //
  // const clearStorage = async () => {
  //   try {
  //     await AsyncStorage.clear();
  //   } catch (e) {
  //     console.error(e);
  //   }
  // };

  const getMyObject = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@key');
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      // read error
    }

    console.log('Done.');
  };

  // const onSubmitEditing = () => {
  //   if (!age) return;
  //
  //   saveData();
  //   setAge('');
  // };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Android App</Text>
      </View>
      <View style={styles.panel}>
        <Text>Enter your age here:</Text>
        {/*<TextInput*/}
        {/*  style={styles.input}*/}
        {/*  // value={age}*/}
        {/*  placeholder="Age is just a number"*/}
        {/*  onChangeText={onChangeText}*/}
        {/*  onSubmitEditing={onSubmitEditing}*/}
        {/*/>*/}
        <Button title="Set object data" onPress={setObjectValue} />
        {/*<TouchableOpacity onPress={clearStorage} style={styles.button}>*/}
        {/*  <Text style={styles.buttonText}>Clear Storage</Text>*/}
        {/*</TouchableOpacity>*/}
        <Button title="generateKey" onPress={generateKey} />
        <Text>{age}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    width: '100%',
    backgroundColor: '#dcdcdc',
    padding: 20,
    borderBottomWidth: StyleSheet.hairlineWidth,
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    color: '#333',
    fontWeight: 'bold',
  },
  panel: {
    paddingTop: 40,
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    padding: 10,
    backgroundColor: '#dcdcdc',
  },
  input: {
    padding: 15,
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
    margin: 10,
  },
  button: {
    margin: 10,
    padding: 10,
    backgroundColor: 'yellow',
  },
  buttonText: {
    fontSize: 18,
    color: '#444',
  },
});
