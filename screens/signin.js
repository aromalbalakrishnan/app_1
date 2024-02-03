import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, StyleSheet } from 'react-native';

const Signin = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const registerUser = async (event) => {
    event.preventDefault()

		const response = await fetch('http://localhost:1234/api/register', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				name,
				email,
				password,
			}),
		})

		const data = await response.json()

		if (data.status === 'ok') {
			history.push('/login.js')
		}
  };

  return (
    <View style={styles.container}>
      <Text>Sign Up</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="Username"
      />
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="Email"
      />
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        placeholder="Password"
        secureTextEntry
      />
      <TouchableOpacity style={styles.submitButton} onPress={registerUser}>
        <Text style={styles.submitButtonText}>Register</Text>
      </TouchableOpacity>
      {/* <Text style={styles.signUpButtonText}>Already registered?</Text> */}
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.signUpButtonText}>Already registered?Login</Text>
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

export default Signin;
