import {
  Alert,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import {
  AntDesign,
  Entypo,
  Feather,
  FontAwesome5,
  Ionicons,
} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Checkbox from "expo-checkbox";
import BottomFirst from "../components/BottomFirst";
import { auth, db } from "../firebase";
import { doc, setDoc, setDocs } from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";

const Resgister = () => {
  const navigation = useNavigation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const resgister = () => {
    if (email === "" || password === "" || phone === "" || name === "") {
      Alert.alert(
        "Invalid Details",
        "Please fill all the details",
        [
          {
            text: "Cancel",
            onPress: () => Alert.alert("Cancel Pressed"),
            style: "cancel",
          },
          { text: "OK", onPress: () => console.log("OK Pressed") },
        ],
        {
          cancelable: false,
        }
      );
    }
    createUserWithEmailAndPassword(auth, email, password, name).then(
      (userCredential) => {
        console.log("user credential", userCredential);
        const user = userCredential._tokenResponse.email;
        const myUserUid = auth.currentUser.uid;

        setDoc(doc(db, "users", `${myUserUid}`), {
          email: user,
          phone: phone,
          name: name,
        });
      }
    );
  };
  return (
    <View style={{ backgroundColor: "#1C6D64", flex: 1 }}>
      <View style={{ alignItems: "center", marginTop: 70 }}>
        <Text style={{ fontSize: 40, fontWeight: "900", color: "#F9F4EE" }}>
          UNIx
        </Text>
        <Text
          style={{
            fontSize: 16,
            fontWeight: "400",
            color: "#F9F4EE",
            marginTop: 11,
          }}
        >
          Quote for app
        </Text>
        <Text style={{ marginTop: 61, color: "#F9F4EE", fontSize: 20 }}>
          Tạo tài khoản
        </Text>
        <View style={{ marginTop: 35 }}>
          <View
            style={{
              marginTop: 15,
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "#fff",
              borderRadius: 14,
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.2,
              shadowRadius: 4,
              elevation: 3,
            }}
          >
            <FontAwesome5
              name="user"
              size={16}
              color="#888"
              style={{ marginHorizontal: 18 }}
            />
            <TextInput
              placeholder="Tên"
              value={name}
              onChangeText={(text) => setName(text)}
              style={{
                height: 48,
                fontSize: 14,
                width: 280,
              }}
            />
          </View>
          <View
            style={{
              marginTop: 15,
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "#fff",
              borderRadius: 14,
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.2,
              shadowRadius: 4,
              elevation: 3,
            }}
          >
            <Feather
              name="phone"
              size={16}
              color="#888"
              style={{ marginHorizontal: 17 }}
            />
            <TextInput
              value={phone}
              onChangeText={(text) => setPhone(text)}
              placeholder="Số điện thoại"
              style={{
                height: 48,
                fontSize: 14,
                width: 300,
              }}
              keyboardType="numeric"
            />
          </View>
          <View
            style={{
              marginTop: 15,
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "#fff",
              borderRadius: 14,
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.2,
              shadowRadius: 4,
              elevation: 3,
            }}
          >
            <Feather
              name="mail"
              size={16}
              color="#888"
              style={{ marginHorizontal: 18 }}
            />
            <TextInput
              value={email}
              onChangeText={(text) => setEmail(text)}
              placeholder="Email"
              style={{
                height: 48,
                fontSize: 14,
                width: 300,
              }}
            />
          </View>
          <View
            style={{
              marginTop: 15,
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "#fff",
              borderRadius: 14,
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.2,
              shadowRadius: 4,
              elevation: 3,
            }}
          >
            <AntDesign
              name="lock1"
              size={16}
              color="#888"
              style={{ marginHorizontal: 18 }}
            />
            <TextInput
              value={password}
              onChangeText={(text) => setPassword(text)}
              placeholder="Mật khẩu"
              style={{
                height: 48,
                fontSize: 14,
                width: 280,
              }}
              secureTextEntry={true}
            />
            <Feather
              name="eye"
              size={16}
              color="#888"
              style={{ marginRight: 16 }}
            />
          </View>
        </View>
        <View style={styles.section}>
          <Checkbox
            style={styles.checkbox}
            value={isChecked}
            onValueChange={setIsChecked}
            color={isChecked ? "#579c94" : undefined}
          />
          <Text style={styles.paragraph}>
            Chấp nhận các nguyên tắc bảo mật của ứng dụng
          </Text>
        </View>
        <TouchableOpacity
          onPress={resgister}
          style={{
            width: 380,
            height: 48,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#fff",
            borderRadius: 14,
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.2,
            shadowRadius: 4,
            elevation: 3,
            marginTop: 35,
          }}
        >
          <Text style={{ fontSize: 16, fontWeight: "700", color: "#1C6D64" }}>
            Đăng ký
          </Text>
        </TouchableOpacity>
        <View style={{ marginTop: 30 }}>
          <BottomFirst />
        </View>
        <View style={{ flexDirection: "row", marginTop: 30 }}>
          <Text style={{ color: "#F9F4EE" }}>Bạn đã có tài khoản? </Text>
          <Pressable onPress={() => navigation.navigate("Login")}>
            <Text style={{ color: "#C8E1DE" }}>Đăng nhập</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default Resgister;

const styles = StyleSheet.create({
  section: {
    flexDirection: "row",
    alignItems: "center",
    width: 360,
    marginTop: 10,
  },
  checkbox: {
    backgroundColor: "white",
    borderColor: "white",
    borderRadius: 5,
    width: 13,
    height: 13,
  },
  paragraph: {
    color: "#F9F4EE",
    fontSize: 10,
    marginLeft: 10,
    width: 244,
  },
});
