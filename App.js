import React from 'react';
import { View, Text, Image, StyleSheet, FlatList, Alert } from 'react-native';
// import {uuid} from 'uuidv4';
import Header from './components/Header';
// import ListItem from './components/ListItem';
// import AddItem from './components/AddItem';

const App = () => {
//   const [items, setItems] = useState([
//     {id: uuid(), text: '1' }, 
//     {id: uuid(), text: '2' }, 
//     {id: uuid(), text: '3' }, 
//     {id: uuid(), text: '4' }, 
//   ]);

  // const deleteItem = (id) => {
  //   setItems(prevItems => {
  //     return prevItems.filter(item => item.id != id);
  //   });
  // };

  // const addItem = text => {
  //   if(!text) {
  //     Alert.alert('Error', 'Please enter an item');
  //   } else {
  //   setItems(prevItems => {
  //     return [{id: uuid(), text}, ...prevItems];
  //   });
  // }
  // };

     return (
       <View style={styles.container}>
         <Header />
         {/* <AddItem addItem={addItem}/> */}
         {/* <FlatList
          data={items}
          renderItem={({item}) => 
         <ListItem item={item} deleteItem={deleteItem} /> } 
         /> */}
         <Image source={{uri: './images/dd.jpg'}} 
         style={styles.img}/>
       </View>
     );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  img: {
    width: 50,
    height: 50,
  },
  text: {
    color: 'darkslateblue',
    fontSize: 30,
  },

});

export default App;