import {
  ActivityIndicator,
  KeyboardAvoidingView,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import {
  AntDesign,
  Entypo,
  Feather,
  FontAwesome5,
  Ionicons,
} from "@expo/vector-icons";
import BottomFirst from "../components/BottomFirst";
import { useNavigation } from "@react-navigation/native";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState("");

  useEffect(() => {
    setLoading(true);
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (!authUser) {
        setLoading(false);
      }
      if (authUser) {
        navigation.replace("Drawer");
      }
    });

    return unsubscribe;
  }, []);

  const login = () => {
    signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
      console.log("user credential", userCredential);
      const user = userCredential.user;
      console.log("user details", user);
    });
  };
  return (
    <View style={{ backgroundColor: "#1C6D64", flex: 1 }}>
      {loading ? (
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
            flex: 1,
          }}
        >
          <Text style={{ marginRight: 10 }}>Loading</Text>
          <ActivityIndicator size="large" color={"red"} />
        </View>
      ) : (
        <KeyboardAvoidingView>
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
              Đăng nhập
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
            <TouchableOpacity
              onPress={login}
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
                marginTop: 80,
              }}
            >
              <Text
                style={{ fontSize: 16, fontWeight: "700", color: "#1C6D64" }}
              >
                Đăng nhập
              </Text>
            </TouchableOpacity>
            <View style={{ marginTop: 137 }}>
              <BottomFirst />
            </View>
            <View style={{ flexDirection: "row", marginTop: 30 }}>
              <Text style={{ color: "#F9F4EE" }}>Bạn chưa có tài khoản? </Text>
              <Pressable onPress={() => navigation.navigate("Resgister")}>
                <Text style={{ color: "#C8E1DE" }}>Đăng ký</Text>
              </Pressable>
            </View>
          </View>
        </KeyboardAvoidingView>
      )}
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({});
