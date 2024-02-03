import React, { useState } from 'react';
import { View, Text, Picker, StyleSheet } from 'react-native';

const ListScreen = () => {
  const [selectedVenue, setSelectedVenue] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>List of Faculty</Text>
      <Picker
        selectedValue={selectedVenue}
        onValueChange={(itemValue) => setSelectedVenue(itemValue)}
      >
        <Picker.Item label="Select Venue" value="" />
        <Picker.Item label="Venue 1" value="venue1" />
        <Picker.Item label="Venue 2" value="venue2" />
      </Picker>
      {/* Display the table with faculty information based on the selected venue */}
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

export default ListScreen;