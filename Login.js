import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

function Login({ onNavigate }) {
  const handleForgotPassword = () => {
    onNavigate('forgotPassword');
  };

  const handleRegister = () => {
    onNavigate('register');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome Back</Text>
      <TextInput placeholder="Username" placeholderTextColor="#AAAAAA" style={styles.input} />
      <TextInput placeholder="Password" placeholderTextColor="#AAAAAA" secureTextEntry={true} style={styles.input} />

      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginButtonText}>Log In</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleForgotPassword}>
        <Text style={styles.linkText}>Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleRegister}>
        <Text style={styles.linkText}>Don't have an account? Register</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1B1B1B', 
    padding: 16,
  },
  header: {
    fontSize: 32,
    color: '#FFFFFF',
    marginBottom: 40,
  },
  input: {
    width: '80%',
    padding: 15,
    marginVertical: 10,
    backgroundColor: '#333333',
    borderRadius: 8,
    color: '#FFFFFF',
  },
  loginButton: {
    backgroundColor: '#800000', 
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 8,
    marginTop: 20,
  },
  loginButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  linkText: {
    color: '#CCCCCC',
    marginTop: 20,
    fontSize: 14,
  },
});

export default Login;
