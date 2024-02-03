import React, { useState } from 'react';
import { View, TextInput, Button, Image, StyleSheet } from 'react-native';

const HomePage = ({ navigation }) => {
  const [institutionUrl, setInstitutionUrl] = useState('');

  const handleSubmit = () => {
    // Add logic to handle the submission of the institution URL
    navigation.navigate('Login');
  }

  return (
    <View style={styles.container}>
      <Image
        source={require('..components/Assets/cua logo.png')}
        style={styles.logo}
        resizeMode="contain"
      />
      <TextInput
        placeholder="Enter Institution URL"
        value={institutionUrl}
        onChangeText={setInstitutionUrl}
      />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 200,
    height: 200,
  },
});

export default HomePage;