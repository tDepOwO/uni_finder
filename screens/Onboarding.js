import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const Onboarding = () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={{ marginTop: 50 }}>
      <Pressable onPress={() => navigation.replace("Login")}>
        <Image
          style={{
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: 446,
            borderRadius: 20,
          }}
          source={require("../storages/onboarding.png")}
        />
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Text
            style={{
              marginTop: 54,
              width: 335,
              textAlign: "center",
              fontSize: 22,
              fontWeight: "900",
              lineHeight: 30,
              color: "#1C6D64",
              height: 90,
            }}
          >
            Chạm tới ước mơ bằng cách tìm hiểu thông tin các trường Đại Học tại
            Việt Nam
          </Text>
        </View>

        <View style={{ alignItems: "center", marginTop: 20 }}>
          <Image
            source={require("../storages/onboarding2.png")}
            style={{
              width: 270,
              height: 181,
            }}
          />
        </View>
      </Pressable>
    </ScrollView>
  );
};

export default Onboarding;

const styles = StyleSheet.create({});
