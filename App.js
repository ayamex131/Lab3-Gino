import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Login from './components/Login';
import Register from './components/Register';
import ForgotPassword from './components/ForgotPassword';

function App() {
  const [currentPage, setCurrentPage] = useState('login');

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <View style={styles.container}>
      {currentPage === 'login' && <Login onNavigate={handlePageChange} />}
      {currentPage === 'register' && <Register onNavigate={handlePageChange} />}
      {currentPage === 'forgotPassword' && <ForgotPassword onNavigate={handlePageChange} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1B1B1B', 
  },
});

export default App;
