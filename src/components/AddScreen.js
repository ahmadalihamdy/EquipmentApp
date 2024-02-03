import React, { useState } from 'react';
import { View, Text, TextInput, Picker, Button, StyleSheet } from 'react-native';

const AddScreen = () => {
  const [venue, setVenue] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleSave = () => {
    // Add logic to save equipment information
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Equipment</Text>
      <Picker
        selectedValue={venue}
        onValueChange={(itemValue) => setVenue(itemValue)}
      >
        <Picker.Item label="Venue 1" value="venue1" />
        <Picker.Item label="Venue 2" value="venue2" />
      </Picker>
      <TextInput
        placeholder="Name"
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <TextInput
        placeholder="Description"
        value={description}
        onChangeText={(text) => setDescription(text)}
      />
      <Button title="Save" onPress={handleSave} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default AddScreen;