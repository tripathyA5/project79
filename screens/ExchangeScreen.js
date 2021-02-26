import React from 'react';
import { Text, View, FlatList, StyleSheet, TextInput, TouchableOpacity} from 'react-native';

export default class WriteStoryScree extends React.Component {
    constructor(){
        super();
        this.state={
          exchanges:''
        }
      }
    
render(){
    return(
        <View>
            <TouchableOpacity>
                <Text>
                    Add Item
                </Text>
            </TouchableOpacity>
            <TextInput
            placeholder='item name'
            maxLength={30}
            />
            <TextInput
            placeholder='item description'
            multiline={true}
            />
           
        </View>
    )
}
}