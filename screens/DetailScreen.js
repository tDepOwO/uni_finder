import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { SliderBox } from "react-native-image-slider-box";
import { useNavigation, useRoute } from "@react-navigation/native";
import { vw, vh, vmin, vmax } from 'react-native-expo-viewport-units';

const DetailScreen = () => {
  const navigation = useNavigation();
  const images = [
    "https://cdn.grabon.in/gograbon/images/web-images/uploads/1658919135375/swiggy-coupons.jpg",
    "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/mfz2zorpe8in1noybhzo",
    "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/lhnwo9ezxo7mpkpvtdcy",
  ];
  const router = useRoute();

  return (
    <View style={{ height: "100%" }}>
      <View
        style={{
          paddingTop: 60,
          backgroundColor: "#F9F4EE",
          // height: 235,
          paddingBottom: vw(4),
          borderRadius: 25,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.2,
          shadowRadius: 4,
          elevation: 3,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginHorizontal: 29,
          }}
        >
          <AntDesign
            name="arrowleft"
            size={30}
            color="#1C6D64"
            onPress={() => navigation.goBack()}
          />
          <Ionicons name="bookmark" size={30} color="#1C6D64" />
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginHorizontal: 28,
            marginTop: 24,
          }}
        >
          <Text
            style={{
              width: 290,
              fontSize: 20,
              fontWeight: "900",
              color: "#1C6D64",
            }}
          >
            {router.params.name}
          </Text>
          <Image
            source={{ uri: router.params.img }}
            style={{ width: 40, height: 40, borderRadius: 20 }}
          />
        </View>
      </View>
      <ScrollView
        style={{ marginBottom: 110 }}
        showsVerticalScrollIndicator={false}
      >
        <View style={{ marginTop: 23 }}>
          <SliderBox
            images={images}
            autoPlay
            circleLoop
            sliderBoxHeight={327}
            resieMode="cover"
            ImageComponentStyle={{
              borderRadius: 20,
              width: "90%",
            }}
          />
        </View>
        <View
          style={{ flexDirection: "row", marginTop: 26, marginHorizontal: 24 }}
        >
          <View
            style={{
              borderColor: "#7BB9B4",
              height: 22,
              borderRadius: 6,
              marginHorizontal: 2,
              justifyContent: "center",
              borderWidth: 1,
            }}
          >
            <Text
              style={{
                fontSize: 12,
                color: "#7BB9B4",
                paddingHorizontal: 10,
                fontWeight: "500",
              }}
            >
              {router.params.major}
            </Text>
          </View>
          <View
            style={{
              borderColor: "#7BB9B4",
              height: 22,
              borderRadius: 6,
              marginHorizontal: 2,
              justifyContent: "center",
              borderWidth: 1,
            }}
          >
            <Text
              style={{
                fontSize: 12,
                color: "#7BB9B4",
                paddingHorizontal: 10,
                fontWeight: "500",
              }}
            >
              {router.params.city}
            </Text>
          </View>
        </View>
        <View style={{ marginTop: 28, marginHorizontal: 20 }}>
          <Text style={{ fontSize: 20 }}>Thông tin</Text>
          <View style={{ marginTop: 8, marginBottom: vh(6)}}>
            <View>
              <View style={{ marginHorizontal: 5, width: "93%" }}>
                <View style={{ flexDirection: "row" }}>
                  <Text
                    style={{
                      fontSize: 7,
                      color: "#4F4F4F",
                      marginRight: 8,
                      marginTop: 7,
                    }}
                  >
                    {"\u2B24"}
                  </Text>
                  <Text
                    style={{
                      fontSize: 16,
                      color: "#4F4F4F",
                      fontWeight: "700",
                    }}
                  >
                    Đại học:{" "}
                    <Text style={{ fontWeight: "400" }}>
                      {router.params.name}
                    </Text>
                  </Text>
                </View>
                <View style={{ flexDirection: "row" }}>
                  <Text
                    style={{
                      fontSize: 7,
                      color: "#4F4F4F",
                      marginRight: 8,
                      marginTop: 7,
                    }}
                  >
                    {"\u2B24"}
                  </Text>
                  <Text
                    style={{
                      fontSize: 16,
                      color: "#4F4F4F",
                      fontWeight: "700",
                    }}
                  >
                    Lĩnh vực đào tạo:{" "}
                    <Text style={{ fontWeight: "400", textAlign: "justify" }}>
                      {router.params.trainning}
                    </Text>
                  </Text>
                </View>
                <View style={{ flexDirection: "row" }}>
                  <Text
                    style={{
                      fontSize: 7,
                      color: "#4F4F4F",
                      marginRight: 8,
                      marginTop: 7,
                    }}
                  >
                    {"\u2B24"}
                  </Text>
                  <Text
                    style={{
                      fontSize: 16,
                      color: "#4F4F4F",
                      fontWeight: "700",
                    }}
                  >
                    Điểm mạnh:{" "}
                    <Text style={{ fontWeight: "400" }}>
                      {router.params.strength}
                    </Text>
                  </Text>
                </View>
                <View style={{ flexDirection: "row" }}>
                  <Text
                    style={{
                      fontSize: 7,
                      color: "#4F4F4F",
                      marginRight: 8,
                      marginTop: 7,
                    }}
                  >
                    {"\u2B24"}
                  </Text>
                  <Text
                    style={{
                      fontSize: 16,
                      color: "#4F4F4F",
                      fontWeight: "700",
                    }}
                  >
                    Học phí:{" "}
                    <Text style={{ fontWeight: "400" }}>
                      {router.params.fee}
                    </Text>
                  </Text>
                </View>
                <View style={{ flexDirection: "row" }}>
                  <Text
                    style={{
                      fontSize: 7,
                      color: "#4F4F4F",
                      marginRight: 8,
                      marginTop: 7,
                    }}
                  >
                    {"\u2B24"}
                  </Text>
                  <Text
                    style={{
                      fontSize: 16,
                      color: "#4F4F4F",
                      fontWeight: "700",
                    }}
                  >
                    Ranking:{" "}
                    <Text style={{ fontWeight: "400" }}>
                      {router.params.ranking}
                    </Text>
                  </Text>
                </View>
                <View style={{ flexDirection: "row" }}>
                  <Text
                    style={{
                      fontSize: 7,
                      color: "#4F4F4F",
                      marginRight: 8,
                      marginTop: 7,
                    }}
                  >
                    {"\u2B24"}
                  </Text>
                  <Text
                    style={{
                      fontSize: 16,
                      color: "#4F4F4F",
                      fontWeight: "700",
                    }}
                  >
                    Cơ hội việc làm:{" "}
                    <Text style={{ fontWeight: "400" }}>
                      {router.params.job}
                    </Text>
                  </Text>
                </View>
                {/* <View style={{ flexDirection: "row" }}>
                  <Text
                    style={{
                      fontSize: 7,
                      color: "#4F4F4F",
                      marginRight: 8,
                      marginTop: 7,
                    }}
                  >
                    {"\u2B24"}
                  </Text>
                  <Text
                    style={{
                      fontSize: 16,
                      color: "#4F4F4F",
                      fontWeight: "700",
                    }}
                  >
                    Các hoạt động, CLB:{" "}
                    <Text style={{ fontWeight: "400" }}>
                      {router.params.clb}
                    </Text>
                  </Text>
                </View> */}
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      <View
        style={{
          width: "100%",
          height: 104,
          borderRadius: 25,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.2,
          shadowRadius: 4,
          elevation: 3,
          backgroundColor: "#F9F4EE",
          position: "absolute",
          bottom: 0,
        }}
      >
        <Pressable
          onPress={() => navigation.navigate("Bookmark")}
          style={{
            height: 48,
            width: 327,
            backgroundColor: "#1C6D64",
            borderRadius: 25,
            justifyContent: "center",
            alignItems: "center",
            alignSelf: "center",
            marginTop: 14,
          }}
        >
          <Text style={{ fontSize: 16, color: "#F9F4EE", fontWeight: "600" }}>
            Quan tâm
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({});
