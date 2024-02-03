import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, StyleSheet } from 'react-native';

const Login = ({ navigation }) => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const registerUser = async () => {
    // Your registerUser function implementation here
  };

  return (
    <View style={styles.container}>
      <Text>Login</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="Username"
      />
      
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        placeholder="Password"
        secureTextEntry
      />
      <TouchableOpacity style={styles.submitButton} onPress={registerUser}>
        <Text style={styles.submitButtonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Signin')}>
        <Text style={styles.signUpButtonText}>New User? Signin</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    margin: 15,
    height: 40,
    width: 250,
    borderColor: '#7a42f4',
    borderWidth: 1,
    paddingLeft: 15,
  },
  submitButton: {
    backgroundColor: '#7a42f4',
    padding: 10,
    margin: 15,
    height: 40,
    width: 250,
    justifyContent: 'center',
    alignItems: 'center',
  },
  signUpButtonText: {
    color: '#7a42f4',
  },
});

export default Login;
