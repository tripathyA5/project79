import React from 'react';
import { Text, View, TouchableOpacity, TextInput, Image, StyleSheet, KeyboardAvoidingView, Alert, Modal } from 'react-native';
import * as firebase from 'firebase';
export default class LoginScreen extends React.Component{
    constructor(){
        super();
        this.state={
          emailId : '',
          password: '',
          firstname:'',
          lastname:'',
          address:'',
          contact:'',
          confirmPassword:'',
          isModalVisible=false
        }
      }
    login = async (email, password)=>{
        if(email&&password){
            try{
                const response = await firebase.auth().signInWithEmailAndPassword(email,password)
                if(response){
this.props.navigation.navigate("Transactio")
                }
            }
            catch(error){
                switch (error.code) {
                    case 'auth/user-not-found':
                      alert("user dosen't exists")
                      console.log("doesn't exist")
                      break
                    case 'auth/invalid-email':
                      alert('incorrect email or password')
                      console.log('invaild')
                      break
            }
        }
    }
        else{
            alert("Enter email & password")
        }
    }
    showModal = ()=>{
      return(
        <Modal
        animationType="fade"
        transparent={true}
        visible={this.state.isModalVisible}
        >
          <View>
            <ScrollView>
              <KeyboardAvoidingView>
                <Text>
                  Registration
                </Text>
                <TextInput
                placeholder="firstname"
                maxLength={12}
                onChangeText={(text)=>{
                  this.setState({
                    firstname:text
                  })
                }
              }
                />
                <TextInput
                placeholder="lastname"
                maxLength={20}
                onChangeText={(text)=>{
                  this.setState({
                    lastname:text
                  })
                }
              }
                />
                 <TextInput
                placeholder="address"
                multiline={true}
                onChangeText={(text)=>{
                  this.setState({
                    address:text
                  })
                }
              }
                />
                <TextInput
                placeholder="contact"
                maxLength={10}
                keyboardType={"numeric"}
                onChangeText={(text)=>{
                  this.setState({
                    contact:text
                  })
                }
              }
                />
                <TextInput
                placeholder="password"
                secureTextEntry={true}
                maxLength={12}
                onChangeText={(text)=>{
                  this.setState({
                    password:text
                  })
                }
              }
                />
                  <TextInput
                placeholder="testEmail@gmail.com"
                keyboardType={"email-address"}
                maxLength={12}
                onChangeText={(text)=>{
                  this.setState({
                    emailId:text
                  })
                }
              }
                />
                  <TextInput
                placeholder="confirm password"
                maxLength={12}
                secureTextEntry={true}
                onChangeText={(text)=>{
                  this.setState({
                    confirmPassword:text
                  })
                }
              }
                />
              </KeyboardAvoidingView>
            </ScrollView>
          </View>
        </Modal>
  
  
      )
    }
    userLogin = (emailId, password)=>{
      firebase.auth().signInWithEmailAndPassword(emailId, password)
      .then(()=>{
        return Alert.alert("Successfully Login")
      })
      .catch((error)=> {
        var errorCode = error.code;
        var errorMessage = error.message;
        return Alert.alert(errorMessage)
      })
    }
  
    userSignUp = (emailId, password) =>{
      firebase.auth().createUserWithEmailAndPassword(emailId, password)
      .then((response)=>{
        return Alert.alert("User Added Successfully")
      })
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        return Alert.alert(errorMessage)
      });
    }
    render(){
        return(
          <KeyboardAvoidingView>
              <View>
                <Image source={require("../assets/booklogo.jpg")}
               style={{width:200, height: 200}}/>
               <Text> Wireless Library </Text>
              </View>
              <View>
                  <TextInput 
                  placeholder="testemail@gmail.com"
                  keyboardType="email-address"
                  onChangeText={(text)=>{
                    this.setState({
                      emailId: text
                    })
                  }}
                  />
                <TextInput 
                placeholder="Enter Password"
                secureTextEntry={true}
                onChangeText={(text)=>{
                    this.setState({
                      password: text
                    })
                  }}
                />

              </View>

              <View>
                  <TouchableOpacity
                  onPress ={()=>{
                      this.login(this.state.emailId,this.state.password)
                  }}>
                    <Text>
                        Login
                    </Text>
                  </TouchableOpacity>
              </View>
          </KeyboardAvoidingView>
        
        )
    }
}
        
   