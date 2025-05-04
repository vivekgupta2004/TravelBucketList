import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  StatusBar,
  Alert,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = '@travel_bucket_list_destinations';

export default function App() {
  const [destinations, setDestinations] = useState([]);
  const [newDestination, setNewDestination] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadDestinations();
  }, []);


  useEffect(() => {
    if (!loading) {
      saveDestinations();
    }
  }, [destinations]);




  const loadDestinations = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem(STORAGE_KEY);
      if (jsonValue != null) {
        setDestinations(JSON.parse(jsonValue));
      }
    } catch (error) {
      Alert.alert('Error', 'Failed to load destinations');
      console.error('Failed to load destinations', error);
    } finally {
      setLoading(false);
    }
  };



  const saveDestinations = async () => {
    try {
      const jsonValue = JSON.stringify(destinations);
      await AsyncStorage.setItem(STORAGE_KEY, jsonValue);
    } catch (error) {
      Alert.alert('Error', 'Failed to save destinations');
      console.error('Failed to save destinations', error);
    }
  };


  const addDestination = () => {
    if (newDestination.trim() === '') {
      Alert.alert('Error', 'Please enter a destination name');
      return;
    }

    const newItem = {
      id: Date.now().toString(),
      name: newDestination.trim(),
      visited: false,
    };

    setDestinations([...destinations, newItem]);
    setNewDestination('');
  };

  const toggleVisited = (id) => {
    const updatedDestinations = destinations.map(destination => {
      if (destination.id === id) {
        return { ...destination, visited: !destination.visited };
      }
      return destination;
    });
    setDestinations(updatedDestinations);
  };


  const deleteDestination = (id) => {
    const updatedDestinations = destinations.filter(
      destination => destination.id !== id
    );
    setDestinations(updatedDestinations);
  };


  const renderDestination = ({ item }) => (
    <View style={styles.destinationItem}>
      <View style={styles.destinationInfo}>
        <Text style={styles.destinationName}>{item.name}</Text>
        <Text style={[
          styles.destinationStatus,
          item.visited ? styles.visitedText : styles.notVisitedText
        ]}>
          {item.visited ? 'Visited' : 'Not Visited'}
        </Text>
      </View>
      <View style={styles.destinationActions}>
        <TouchableOpacity
          style={[
            styles.actionButton,
            item.visited ? styles.unvisitButton : styles.visitButton
          ]}
          onPress={() => toggleVisited(item.id)}
        >
          <Text style={styles.buttonText}>
            {item.visited ? 'Mark Unvisited' : 'Mark Visited'}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.actionButton, styles.deleteButton]}
          onPress={() => deleteDestination(item.id)}
        >
          <Text style={styles.buttonText}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#2c3e50" />
      
      <View style={styles.header}>
        <Text style={styles.headerTitle}>My Travel Bucket List</Text>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter a destination..."
          value={newDestination}
          onChangeText={setNewDestination}
        />
        <TouchableOpacity
          style={styles.addButton}
          onPress={addDestination}
        >
          <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>
      </View>

      {loading ? (
        <View style={styles.loadingContainer}>
          <Text>Loading destinations...</Text>
        </View>
      ) : (
        <FlatList
          data={destinations}
          keyExtractor={(item) => item.id}
          renderItem={renderDestination}
          style={styles.list}
          ListEmptyComponent={
            <View style={styles.emptyList}>
              <Text style={styles.emptyListText}>
                Your bucket list is empty. Add some dream destinations!
              </Text>
            </View>
          }
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f7fa',
  },
  header: {
    backgroundColor: '#2c3e50',
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
  },
  inputContainer: {
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    backgroundColor: 'white',
  },
  input: {
    flex: 1,
    height: 46,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  addButton: {
    marginLeft: 12,
    backgroundColor: '#3498db',
    paddingHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  list: {
    flex: 1,
  },
  destinationItem: {
    backgroundColor: 'white',
    marginHorizontal: 16,
    marginTop: 16,
    borderRadius: 8,
    padding: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
  },
  destinationInfo: {
    marginBottom: 12,
  },
  destinationName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  destinationStatus: {
    fontSize: 14,
  },
  visitedText: {
    color: '#27ae60',
  },
  notVisitedText: {
    color: '#e74c3c',
  },
  destinationActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  actionButton: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  visitButton: {
    backgroundColor: '#27ae60',
    marginRight: 8,
  },
  unvisitButton: {
    backgroundColor: '#f39c12',
    marginRight: 8,
  },
  deleteButton: {
    backgroundColor: '#e74c3c',
    marginLeft: 8,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  emptyList: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  emptyListText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#7f8c8d',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});