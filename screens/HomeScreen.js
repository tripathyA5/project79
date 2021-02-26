import React from 'react';
import { Text, View, FlatList, StyleSheet, TextInput, TouchableOpacity} from 'react-native';

export default class HomeScreen extends React.Component {
    getRequestedBooksList =()=>{
        this.requestRef = db.collection("exchanges")
        .onSnapshot((snapshot)=>{
          var exchangeList = snapshot.docs.map(document => document.data());
          this.setState({
            exchangeList : exchangeList
          });
        })
      }
    
      componentDidMount(){
        this.getRequesteStoriesList()
      }
    
      componentWillUnmount(){
        this.requestRef();
      }
    

render(){
    return(
        <Text>
            Home
        </Text>
    )
}
}