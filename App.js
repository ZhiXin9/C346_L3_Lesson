import React, {useState} from 'react';
import {View, Text, TextInput, Button, TouchableOpacity, ToastAndroid} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { Alert } from 'react-native';



const App = ()=> {
    const [userType, setUserType] = useState('');  // State for User Type
    const [userName, setUserName] = useState('');  // State for User Name
    const [pw, setPw] = useState('');
    return (
      <View style={{ paddingTop: 40 }}>
          <Text>User Type:</Text>
          <RNPickerSelect
              onValueChange={(value) => setUserType(value)}
              items={[
                  { label: 'Admin', value: 'Admin' },
                  { label: 'Guest', value: 'Guest' },
              ]}
          />

          <Text>User Name:</Text>
          <TextInput
              style={{borderWidth: 1}}
              onChangeText={(text) => setUserName(text)}/>

          <Text>Password:</Text>
          <TextInput
              style={{borderWidth: 1}}
              onChangeText={(text) => setPw(text)}/>

          <TouchableOpacity
              onPress={()=> ToastAndroid.show(`Welcome ${userType} ${userName}`, ToastAndroid.SHORT)}>
              <Text>LOG IN</Text>
          </TouchableOpacity>
          <Text>{pw}</Text>

          {/*<Button*/}
          {/*    onPress={() => Alert.alert("Hello World!")}*/}
          {/*    title="Log in"*/}
          {/*/>*/}
      </View>
  );
};

export default App;
