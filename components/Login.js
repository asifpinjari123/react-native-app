import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, Image, TouchableOpacity, ScrollView } from 'react-native';
import * as Google from 'expo-auth-session/providers/google';
import { ResponseType } from 'expo-auth-session';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
    clientId: '1062881669673-9mgn1fc82987qb4665f1ni1114vdgasm.apps.googleusercontent.com',
    responseType: ResponseType.IdToken,
  });

  useEffect(() => {
    if (response?.type === 'success') {
      // User has successfully logged in with Google
      // You can access the user's information using response.params
      console.log('User info:', response.params);

      // Display an alert to the user indicating successful login
      Alert.alert('Google login successful!', 'You are now logged in.');
    }
  }, [response]);

  const handleLogin = () => {
    // Normal email and password login logic
    if (email && password) {
      // Email and password authentication logic
      // If authentication is successful, log in the user
      // If authentication fails, display an appropriate error message

      // Placeholder code for successful login, you should replace it with your actual login logic
      const isAuthenticated = true; // Replace with your authentication logic
      if (isAuthenticated) {
        // If authentication is successful, you can navigate to another screen or take other actions
        // For example, you can navigate to a home screen using navigation.navigate('Home');
        Alert.alert('Login successful!', 'You are now logged in.');

        navigation.navigate("Home")
      } else {
        Alert.alert('Login failed', 'Please check your credentials.');
      }
    } else {
      // Email and password are empty, display an error message
      Alert.alert('Empty Fields', 'Please enter your email and password.');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image source={require('../assets/foodpng.webp')} style={styles.logo} />
        <Text style={styles.heading}>Welcome Back!</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            onChangeText={(text) => setEmail(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry={true}
            onChangeText={(text) => setPassword(text)}
          />
        </View>
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.googleLoginButton} onPress={() => promptAsync()}>
          <Text style={styles.googleLoginButtonText}>Login with Google</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5', // Light gray background color
  },
  content: {
    width: '100%',
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 10,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 20,
    alignSelf: 'center',
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  inputContainer: {
    width: '100%',
  },
  input: {
    width: '100%',
    height: 60,
    borderColor: '#E0E0E0',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10, // Horizontal padding to make text fields wider
    fontSize: 16,
    borderRadius: 10,
  },
  loginButton: {
    backgroundColor: 'blue',
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginTop: 10,
  },
  loginButtonText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
  googleLoginButton: {
    backgroundColor: 'red',
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginTop: 10,
  },
  googleLoginButtonText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
});

export default Login;


