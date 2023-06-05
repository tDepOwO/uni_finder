import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Feather, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { auth, db } from "../firebase";
import { collection, doc, getDoc } from "firebase/firestore";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../CardReducer";

const CardResult = ({ item }) => {
  const navigation = useNavigation();

  return (
    <Pressable
      onPress={() =>
        navigation.navigate("Detail", {
          name: item.name,
          img: item.img,
          trainning: item.trainning,
          strength: item.strength,
          ownership: item.ownership,
          location: item.location,
          fee: item.fee,
          ranking: item.ranking,
          job: item.job,
          clb: item.clb,
          city: item.city,
          major: item.major,
        })
      }
      style={{
        width: 380,
        height: 148,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 3,
        borderRadius: 8,
        backgroundColor: "#EDF3F3",
        justifyContent: "center",
        marginBottom: 20,
      }}
    >
      <View style={{ marginHorizontal: 8, flexDirection: "row" }}>
        <View>
          <Image
            source={{ uri: item.img }}
            style={{ width: 119, height: 132, resizeMode: "contain" }}
          />
        </View>
        <View style={{ marginLeft: 7, marginTop: 6 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <View style={{ flexDirection: "row", width: 190 }}>
              <View
                style={{
                  backgroundColor: "#C8E1DE",
                  height: 16,
                  borderRadius: 999,
                  marginHorizontal: 2,
                }}
              >
                <Text
                  style={{
                    fontSize: 10,
                    color: "#208B83",
                    height: 16,
                    paddingHorizontal: 5,
                    marginTop: 2,
                    fontWeight: "700",
                  }}
                >
                  Top {item.ranking}
                </Text>
              </View>

              <View
                style={{
                  backgroundColor: "#C8E1DE",
                  height: 16,
                  borderRadius: 999,
                  marginHorizontal: 2,
                }}
              >
                <Text
                  style={{
                    fontSize: 10,
                    color: "#208B83",
                    height: 16,
                    paddingHorizontal: 5,
                    marginTop: 2,
                    fontWeight: "700",
                  }}
                >
                  {item.major}
                </Text>
              </View>
              <View
                style={{
                  backgroundColor: "#C8E1DE",
                  height: 16,
                  borderRadius: 999,
                  marginHorizontal: 2,
                }}
              >
                <Text
                  style={{
                    fontSize: 10,
                    color: "#208B83",
                    height: 16,
                    paddingHorizontal: 5,
                    marginTop: 2,
                    fontWeight: "700",
                  }}
                >
                  {item.city}
                </Text>
              </View>
            </View>

            <View style={{ right: -38, position: "absolute" }}>
              <Feather name="bookmark" size={24} color="#1C6D64" />
            </View>
          </View>
          <Pressable
            onPress={() =>
              navigation.navigate("Detail", {
                name: item.name,
                img: item.img,
                trainning: item.trainning,
                strength: item.strength,
                ownership: item.ownership,
                location: item.location,
                fee: item.fee,
                ranking: item.ranking,
                job: item.job,
                clb: item.clb,
                city: item.city,
                major: item.major,
              })
            }
          >
            <Text
              style={{
                width: 200,
                marginTop: 8,
                fontWeight: "700",
                color: "#1C6D64",
                fontSize: 12,
              }}
            >
              {item.name}
            </Text>
          </Pressable>

          <Text style={{ marginTop: 15, fontSize: 10, color: "#828282" }}>
            Thứ hạng: {item.ranking}
          </Text>
          <View
            style={{ flexDirection: "row", alignItems: "center", marginTop: 8 }}
          >
            <Ionicons name="ios-bookmark" size={24} color="#1C6D64" />
            <Text style={{ fontSize: 10, color: "#828282" }}>15</Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

export default CardResult;

const styles = StyleSheet.create({});
