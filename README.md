# Travel Bucket List App

A simple React Native application for managing your travel bucket list. This app allows users to add destinations they want to visit, mark them as visited/unvisited, and delete them from the list.

## Features
- Add travel destinations to your bucket list
- View all destinations in a scrollable list
- Mark destinations as visited or unvisited with a toggle button
- Delete destinations from the list
- Data persistence using AsyncStorage (bonus feature)

## Screenshots
- **Adding a destination**
  ![Add Destination Screenshot](https://raw.githubusercontent.com/vivekgupta2004/TravelBucketList/main/add-destination.png)
  
- **Marking a destination as visited**
  ![Mark Visited Screenshot](https://raw.githubusercontent.com/vivekgupta2004/TravelBucketList/main/mark-visited.png)

- **Deleting a destination**
  ![Delete Destination Screenshot](https://raw.githubusercontent.com/vivekgupta2004/TravelBucketList/main/delete-destination.png)

## Technologies Used
- **React Native**
- **React Hooks** (`useState`, `useEffect`)
- **AsyncStorage** for data persistence
- **FlatList** for efficient list rendering

## Approach
The Travel Bucket List app allows users to create, update, and delete travel destinations in their list. Below is a brief explanation of the approach used in the development of the app:

### 1. **State Management:**
The app uses **React Hooks** (`useState`, `useEffect`) for managing the state of:
- `destinations`: A list of all destinations added by the user.
- `newDestination`: The new destination entered by the user.
- `loading`: A loading state to indicate when data is being loaded.

### 2. **AsyncStorage for Data Persistence:**
Data is stored in **AsyncStorage**, which allows the app to persist the list of destinations even after restarting the app.
- On initial load, the app attempts to fetch the stored destinations from AsyncStorage.
- Whenever the destinations list is updated, it is saved back to AsyncStorage.

### 3. **CRUD Operations:**
- **Create**: A user can add a new destination using a **TextInput** and an **Add** button.
- **Read**: The list of destinations is displayed using a **FlatList** component. Each destination shows the name and its visited status.
- **Update**: The user can toggle a destination between "Visited" and "Not Visited" using a **Mark Visited/Unvisited** button.
- **Delete**: A destination can be deleted from the list using the **Delete** button.

### 4. **UI and Styling:**
The UI is built using React Native components like **SafeAreaView**, **FlatList**, **TextInput**, and **TouchableOpacity**. Custom styling is applied to each component for a clean and responsive interface.

### 5. **Error Handling:**
Basic error handling is implemented using **Alert** to notify users when there is an issue loading or saving the destinations.

## Code Structure
The application is built as a single-file React Native app (`App.js`) for simplicity. The code includes:
- **State management** using React Hooks
- **AsyncStorage implementation** for data persistence
- **Structured UI components**
- **Clean, readable code** with comments

## Learning Outcomes
This project demonstrates the following:
- **React Native fundamentals**
- **Working with functional components and hooks**
- **Managing and persisting state**
- **Creating responsive UI elements**
- **Implementing CRUD operations** (Create, Read, Update, Delete) in a mobile app




