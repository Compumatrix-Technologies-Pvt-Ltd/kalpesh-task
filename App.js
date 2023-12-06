// App.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ProfileScreen from './src/profile';
import LinearGradient from 'react-native-linear-gradient';

const Stack = createStackNavigator();

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Implement your login logic here
    console.log('Logging in with:', username, password);
    // For simplicity, navigating to a home screen after login
    navigation.navigate('Profile',{username,password});
  };

  return (


<LinearGradient
      colors={['#5c0067', '#00d4ff']}
      style={ { flex: 1,
        borderRadius: 10,
        height: '100%',}}
    >
    <View style={styles.container}>

      <Text style={{ alignSelf:"center",fontWeight: "bold",color:"white",fontSize:30,marginBottom:30}}>Login</Text>
      <View style={styles.row}>
        <Text style={styles.label}>Username :</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setUsername(text)}
          value={username}
          placeholder="Enter your username"
        />
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Password :</Text>
        <TextInput
          style={styles.input}  
          onChangeText={(text) => setPassword(text)}
          value={password}
          placeholder="Enter your password"
          secureTextEntry
        />
      </View>

      <View style={{width:100,alignSelf:"center"}}>
        <Button title="Login" onPress={handleLogin} />
      </View>
    </View>
    </LinearGradient>
  );
};

// const HomeScreen = () => {
//   return (
//     <View style={styles.container}>
//       <Text>Welcome to the Home Screen!</Text>
//     </View>
//   );
// };

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Welcome to the Home Screen!</Text>
      <Button title="Go to Profile" onPress={() => navigation.navigate('Profile')} />
    </View>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    
  },
  label: {
    marginRight: 8,
    color:"white",
    fontWeight:"bold"
  },
  input: {
    flex: 1,
    borderWidth: 2,
    borderColor: 'gray',
    padding: 8,
    borderRadius:10,
    color:"white",
    
  },
});

export default App;
