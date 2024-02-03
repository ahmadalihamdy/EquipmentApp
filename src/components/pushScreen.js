import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const PushScreen = () => {
  const [equipmentData, setEquipmentData] = useState([]);

  
  useEffect(() => {
    
    const fetchData = async () => {
      try {
        const response = await fetch('#');
        const data = await response.json();
        setEquipmentData(data);
      } catch (error) {
        console.error('Error fetching equipment data:', error);
      }
    };

    fetchData();
  }, []); 
  
  const handlePush = () => {
    // Add logic to push equipment information
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Equipment List</Text>
      {equipmentData.length > 0 ? (
        equipmentData.map((equipment, index) => (
          <Text key={index}>{equipment.name}</Text>
          // Display other information as needed
        ))
      ) : (
        <Text>No equipment data available.</Text>
      )}
      <Button title="Push" onPress={handlePush} accessibilityLabel="Push Button" />
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

export default PushScreen;