import {
  Button,
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import React, { useState } from "react";
import { Entypo } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";

const User = {
  id: "u1",
  image:
    "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim.jpg",
  name: "Vadim Savin",
};

const CreatePostScreen = () => {
  const [post, setPost] = useState("");
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const onSubmit = () => {
    console.warn(post);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={[styles.container, { marginBottom: 10 }]}
      contentContainerStyle={{ flex: 1 }}
    >
      <View style={styles.header}>
        <Image style={styles.image} source={{ uri: User.image }} />
        <Text style={styles.name}>{User.name}</Text>
        <Entypo
          onPress={pickImage}
          name="images"
          size={24}
          color="limegreen"
          style={styles.icon}
        />
      </View>
      <TextInput
        value={post}
        onChangeText={setPost}
        placeholder="what is on your mind?"
        multiline
      />
      {image && <Image source={{ uri: image }} style={styles.postImage} />}

      <View style={styles.buttonContainer}>
        <Button title="Post" onPress={onSubmit} />
      </View>
    </KeyboardAvoidingView>
  );
};

export default CreatePostScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    padding: 10,
    marginTop: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    height: 40,
    width: 40,
    borderRadius: 30,
    marginRight: 10,
  },
  name: {
    fontWeight: "500",
  },
  input: {
    marginBottom: "auto",
  },
  buttonContainer: {
    marginTop: "auto",
    marginVertical: 10,
  },
  icon: {
    marginLeft: "auto",
  },
  postImage: {
    width: "50%",
    alignSelf: "center",
    aspectRatio: 4 / 3,
  },
});
