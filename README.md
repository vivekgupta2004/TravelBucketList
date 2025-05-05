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
  ![Add Destination Screenshot](https://github.com/vivekgupta2004/TravelBucketList/blob/b6a4c4bf11a577464c396bdb2daf384e0a32e46d/add-destination.png)
  
- **Marking a destination as visited**
  ![Mark Visited Screenshot](https://github.com/vivekgupta2004/TravelBucketList/blob/b6a4c4bf11a577464c396bdb2daf384e0a32e46d/mark-visited.png)

- **Deleting a destination**
  ![Delete Destination Screenshot](https://github.com/vivekgupta2004/TravelBucketList/blob/b6a4c4bf11a577464c396bdb2daf384e0a32e46d/delete-destination.png)

  ### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)
- A mobile device with the **Expo Go** app or an emulator

### Installation

```bash
git clone https://github.com/vivekgupta2004/TravelBucketList.git
cd TravelBucketList
npm install
npx expo start

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

## Folder Structure
Currently, the application is organized in a simple structure with all logic in a single file (App.js). This makes it easier for beginners to understand the flow of the app.

TravelBucketList/
├── App.js              # Main React Native application file
├── assets/             # Folder for images, icons, and other static assets
├── package.json        # Project metadata and dependencies
└── README.md           # Project documentation


MIT License

Copyright (c) 2025 Vivek Gupta

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights  
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell      
copies of the Software, and to permit persons to whom the Software is          
furnished to do so, subject to the following conditions:                       

The above copyright notice and this permission notice shall be included in     
all copies or substantial portions of the Software.                            

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR     
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,       
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE    
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER         
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING        
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS   
IN THE SOFTWARE.



