import React,{useState} from 'react';
import { StyleSheet, Text, View, PickerIOSComponent, Button, TextInput } from 'react-native';

export default function App() {
  const[name,setName]= useState('Shamali');
  const[age,setAge]= useState('20');

  const [person, setPerson]= useState({name:'Sahil', age: '20'})
  const clickHandler=()=>{
    setName('Shinde');
    setPerson({name:'Baban', age:'50'})
  }
  return (

    <View style={styles.container}>
     <Text>
My Name is {name} and age {age}
     </Text>
     <Text>His name is {person.name} and his age is {person.age}</Text>
     <Text>Enter name</Text>
     <TextInput style={styles.input} placeholder='e.g. Sabrina' onChangeText={(val)=>setName(val)}/>
     <Text>Enter age</Text>
     <TextInput style={styles.input} placeholder='e.g. 18' keyboardType='numeric' onChangeText={(val)=>setAge(val)}/>
     <View style={styles.buttonContainer}>
       <Button title='Click me' onPress={clickHandler}/>
     </View>
     </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
header:{
  backgroundColor: 'pink',
  padding: 20,
},
body:{
  backgroundColor:'yellow',
  padding:20,
},
buttonContainer:{
 top:20,
},
input:{
  borderWidth: 1,
  borderColor:'#777',
  padding:8,
  margin:10,
  width:200  
}
  
});
