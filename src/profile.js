// // // ProfileScreen.js
// // import React, { useState } from 'react';
// // import { View, Text, Button, Image } from 'react-native';
// // import ImagePicker from 'react-native-image-picker';

// // const Profile = () => {
// //   const [avatar, setAvatar] = useState(null);

// //   const handleImagePick = () => {
// //     ImagePicker.showImagePicker({}, response => {
// //       if (response.didCancel) {
// //         console.log('User cancelled image picker');
// //       } else if (response.error) {
// //         console.log('ImagePicker Error: ', response.error);
// //       } else {
// //         setAvatar(response.uri);
// //       }
// //     });
// //   };

// //   return (
// //     <View>
// //       <Image source={{ uri: avatar }} style={{ width: 100, height: 100 }} />
// //       <Button title="Select Avatar" onPress={handleImagePick} />
// //       <Text>Change Name and Date of Birth</Text>
// //     </View>
// //   );
// // };

// // export default Profile;

// // ProfileScreen.js
// import React, { useState, useEffect } from "react";
// import {
//   View,
//   Text,
//   Button,
//   Image,
//   TouchableOpacity,
//   TextInput,
//   StyleSheet,
//   Alert,
//   inputValue
// } from "react-native";
// import DocumentPicker from "react-native-document-picker";
// import Icon from "react-native-vector-icons/FontAwesome";
// import DatePicker from "react-native-datepicker";
// import LinearGradient from 'react-native-linear-gradient';

// const ProfileScreen = ({ route }) => {
//   const { username, password } = route.params;

//   const [dateOfBirth, setDateOfBirth] = useState(null);

//   const [avatar, setAvatar] = useState(null);
//   const [aboutValue, setAboutValue] = useState('');

//   const handleImagePick = async () => {
//     try {
//       const result = await DocumentPicker.pick({
//         type: [DocumentPicker.types.images],
//       });
//       console.log("DocumentPicker Result:", result);

//       if (result) {
//         console.log("Selected file URI:", result[0].uri);
//         setAvatar(result.uri);
//       }
//     } catch (err) {
//       if (DocumentPicker.isCancel(err)) {
//         console.log("User cancelled file picker");
//       } else {
//         console.error("DocumentPicker Error:", err);
//       }
//     }
//   };

//   //   const user = {
//   //     username: 'JohnDoe',
//   //     email: 'john.doe@example.com',
//   //     // Do not display the password in the UI for security reasons
//   //     dateOfBirth: '1990-01-01',
//   //   };

//   const handleSubmission = () => {
//     // Perform any necessary logic before showing the alert
//     Alert.alert('Submission Successful',);
//   };

//   return (

//     <LinearGradient
//       colors={['#5c0067', '#00d4ff']}
//       style={ { flex: 1,
//         borderRadius: 10,
//         height: '100%',}}
//     >
//     <View style={{borderRadius: 10, height: "100%" ,}}>

//       {avatar && <Image source={{ uri: avatar }} />}

//       {/* <View style={{width:100,borderRadius:50,backgroundColor:"blue",height:100,alignItems:"baseline",alignSelf:"center",alignContent:"center"}}
//       onPress={handleImagePick}
//       >
//       <Button title="S" onPress={handleImagePick} style={{width:10}}/>
//       <Button
//         title="Pick Image"
//         onPress={handleImagePick}
//         icon={<Icon name="camera" size={15} color="white" />}
//       />
//       </View> */}

//       <View>
//         <TouchableOpacity
//           onPress={handleImagePick}
//           style={{
//             flexDirection: "row",
//             alignItems: "center",
//             alignContent: "center",
//             alignSelf: "center",
//             backgroundColor: "grey",
//             width: 100,
//             height: 100,
//             borderRadius: 50,
//             marginTop: 10,
//           }}
//         >
//           <Icon
//             name="camera"
//             size={20}
//             color="black"
//             style={{ marginLeft: 35 }}
//           />
//           <Text style={{ marginLeft: 5 }}></Text>
//         </TouchableOpacity>
//       </View>
//       {/* <Text>Change Name and Date of Birth</Text> */}

//       <View style={styles.row}>
//         <Text style={styles.label}>Username:</Text>
//         <Text style={styles.value}>{username}</Text>
//       </View>

//       <View style={styles.row}>
//         <Text style={styles.label}>Email:</Text>
//         <TextInput style={styles.value}></TextInput>
//         {/* <Text style={styles.value}>{user.email}</Text> */}
//       </View>

//       {/* Do not display the password in the UI for security reasons */}

//       {/* <View style={styles.row}>
//         <Text style={styles.label}>Date of Birth:</Text>
//         <Text style={styles.value}>{user.dateOfBirth}</Text>
//       </View> */}

// <View style={styles.row}>
//   <Text style={styles.label}>Date of Birth:</Text>
//   <DatePicker
//     style={{ width: 200 }}
//     date={dateOfBirth}
//     mode="date"
//     placeholder="18/07/1997"
//     format="YYYY-MM-DD"
//     confirmBtnText="Confirm"
//     cancelBtnText="Cancel"
//     customStyles={{
//       dateIcon: {
//         position: 'absolute',
//         left: 0,
//         top: 4,
//         marginLeft: 0,
//       },
//       dateInput: {
//         borderWidth: 0, // Set border width to 0 to remove the border
//         borderBottomWidth: 1, // Add underline
//         borderColor: 'gray', // Color of the underline
//         marginLeft: 36,
//         color:"white"
//       },
//       // Add other styles as needed
//     }}
//     onDateChange={(date) => setDateOfBirth(date)}
//   />
// </View>

// <View style={styles.row}>
//         <Text style={styles.label}>About:</Text>
//         <TextInput
//           style={styles.value}
//           multiline={true}
//           numberOfLines={4} // Adjust the number of lines as needed
//           value={aboutValue}
//           onChangeText={(text) => setAboutValue(text)}
//           placeholder="Tell us about yourself"
//         />
//       </View>

//       <View style={{width:150,alignSelf:"center",marginTop:50}}>
//       <Button title="Submit" onPress={handleSubmission} />
//     </View>

//     </View>

//     </LinearGradient>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     paddingHorizontal: 16,
//   },
//   row: {
//     flexDirection: "row",
//     alignItems: "center",
//     marginBottom: 30,marginTop:10
//   },
//   label: {
//     marginRight: 8,
//     fontWeight: "bold",
//     color:"white"
//   },
//   value: {
//     flex: 1,
//     borderWidth: 2,
//     borderColor: "gray",
//     padding: 8,
//     borderRadius: 10,
//     borderWidth: 0, // Set border width to 0 to remove the border
//         borderBottomWidth: 1,
//         color:"white"
//   },
// });

// export default ProfileScreen;

import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Button
} from "react-native";
import { launchImageLibrary } from "react-native-image-picker";

import Icon from "react-native-vector-icons/FontAwesome";

export default function App() {
  const [selectedImage, setSelectedImage] = useState("");

  const imagePicker = () => {
    let options = {
      storageOptions: {
        path: "images",
      },
    };

    launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log("User cancelled image picker");
      } else if (response.error) {
        console.log("ImagePicker Error: ", response.error);
      } else if (response.assets && response.assets.length > 0) {
        const uri = response.assets[0].uri;
        setSelectedImage(uri);
        console.log(uri);
      }
    });
  };

  const deleteImage = () => {
    // Clear the selectedImage state
    setSelectedImage("");
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ height: 200, width: "100%" }}>
        {/* <Text style={{ fontSize: 20 }}>Let`s get to know you </Text>
        <Text>
          Let us get to know you a bit better so you can get the best out of us
        </Text> */}

        <Text  style={{ fontSize: 20 }}>Choose profile photo.</Text>
        <Text>Choose a profile photo from your library or select an avatar to add to your profile</Text>
<View style={{flexDirection:"row",borderWidth:2,height:40,borderRadius:10}}>
<Text style={{borderWidth:1,backgroundColor:"skyblue",width:"50%",borderRadius:10}}>Choose Photo </Text>
<Text style={{alignSelf:"center",alignItems:"center",marginLeft:50}}>Avatar</Text>
</View>
        <View
          style={{
            borderWidth: 2,
            borderColor: "skyblue",
            height: 310,
            width: 310,
            borderRadius: 200,
            alignSelf: "center",
            alignContent: "center",
            justifyContent: "center",
            backgroundColor: "skyblue",
          }}
        >
          <Image
            style={{
              height: 305,
              width: 305,
              borderRadius: 200,
              alignSelf: "center",
              alignContent: "center",
              justifyContent: "center",
            }}
            source={{ uri: selectedImage }}
          />
          <View style={{width:70,backgroundColor:"white",alignSelf:"center",borderRadius:10,}}>
          <Text><Icon name="camera" size={20} color="black"/>  Edit</Text>
          </View>
        </View>


{/*  */}
<View style={{ flexDirection: 'row', justifyContent: 'center' }}>
        <TouchableOpacity
          onPress={() => {
            imagePicker();
          }}
          style={{
            marginTop: 20,
            height: 50,
            width: 50,
            borderRadius: 20,
            justifyContent: "center",
            alignItems: "center",
            alignSelf: "center",
            backgroundColor: "lightcoral",
            marginRight: 10, // Add margin for spacing
          }}
        >
          <Icon name="camera" size={20} color="black"  />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            imagePicker();
          }}
          style={{
            marginTop: 20,
            height: 50,
            width: 50,
            borderRadius: 20,
            justifyContent: "center",
            alignItems: "center",
            alignSelf: "center",
            backgroundColor: "lightcoral",
            marginRight: 10, // Add margin for spacing
          }}
        >
          <Icon name="edit" size={24} color="white" />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            deleteImage();
          }}
          style={{
            marginTop: 20,
            height: 50,
            width: 50,
            borderRadius: 20,
            justifyContent: "center",
            alignItems: "center",
            alignSelf: "center",
            backgroundColor: "lightcoral",
          }}
        >

          <Image source={require('./imagess.png')} style={{ width: 20, height: 20, marginLeft: 5 }} />

        </TouchableOpacity>
      </View>
{/*  */}


        {/* <View style={styles.row}>
          <Text style={styles.label}>First Name :</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => setUsername(text)}
            placeholder="Enter your username"
          />
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Last Name :</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => setUsername(text)}
            //   value={username}
            placeholder="Enter your username"
          />
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Date of Birth</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => setUsername(text)}
            //   value={username}
            placeholder="Enter your username"
          />
        </View> */}
        

      </View>
      <View style={{marginTop:"100%"}}>
        <Button title="Save"  />
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 16,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
    marginTop:20
  },
  label: {
    marginRight: 8,
    color: "black",
    fontWeight: "bold",
  },
  input: {
    flex: 1,
    borderWidth: 2,
    borderColor: "gray",
    padding: 8,
    borderRadius: 10,
    color: "black",
  },
});
