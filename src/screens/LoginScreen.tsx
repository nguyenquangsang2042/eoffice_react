import React, {useState} from 'react';
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Alert,
  Keyboard,
  ImageBackground,
} from 'react-native';
import {loginUser} from '../controllers/LoginController';

const LoginScreen: React.FC = () => {
  const [username, setUsername] = useState('tphong1');
  const [password, setPassword] = useState('VTlamson123!@#');
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    Keyboard.dismiss();
    loginUser(username, password)
      .then(res => {})
      .catch(ex => {
        Alert.alert('Login Failed', ex?.message);
      });
  };
  return (
    <ImageBackground
      source={require('../../assets/image/icon_splashscreen.png')} // Replace with the path to your image
      style={styles.backgroundImage}>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <Button title="Login" onPress={handleLogin} />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // Adjust the image's size and aspect ratio to cover the entire view
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  input: {
    backgroundColor: 'white',
    width: '100%',
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
});

export default LoginScreen;
