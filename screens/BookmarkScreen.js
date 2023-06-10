import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { AntDesign, Entypo, Ionicons, MaterialIcons } from "@expo/vector-icons";
import SearchBar from "../components/SearchBar";
import CardResult from "../components/CardResult";
import { useNavigation } from "@react-navigation/native";
import { vw, vh, vmin, vmax } from "react-native-expo-viewport-units";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addBookmark, removeBookmark } from "../bookmarkActions";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

const BookmarkScreen = () => {
  const card = useSelector((state) => state.card.card);
  const dispatch = useDispatch();
  const [bookmarkedItems, setBookmarkedItems] = useState([]);

  useEffect(() => {
    const fetchBookmarkedItems = async () => {
      const colRef = collection(db, "uni_list");
      const docsSnap = await getDocs(colRef);
      const items = [];
      docsSnap.forEach((doc) => {
        items.push(doc.data());
      });
      const bookmarkedItems = items.filter((item) => card.includes(item.id));
      setBookmarkedItems(bookmarkedItems);
    };

    fetchBookmarkedItems();
  }, [card]);

  const removeFromBookmarks = (id) => {
    dispatch(removeBookmark(id));
  };
  const navigation = useNavigation();
  return (
    <View style={{ backgroundColor: "#EB9629", height: "100%" }}>
      <View
        style={{
          paddingTop: 60,
          backgroundColor: "#F9F4EE",
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
            alignItems: "center",
          }}
        >
          <AntDesign
            name="arrowleft"
            size={30}
            color="#1C6D64"
            onPress={() => navigation.goBack()}
          />
          <Text style={{ fontSize: 20, fontWeight: "700", color: "#1C6D64" }}>
            Quan tâm
          </Text>
          <View>
            <Image
              source={require("../storages/avt.png")}
              style={{ width: 42, height: 42, borderRadius: 8 }}
            />
          </View>
        </View>

        <View
          style={{
            marginTop: 23,
            marginHorizontal: 29,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <SearchBar />
          <View
            style={{
              width: 42,
              height: 42,
              backgroundColor: "#CD2B26",
              borderRadius: 8,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Entypo name="sound-mix" size={18} color="white" />
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginHorizontal: 29,
            justifyContent: "space-between",
            marginTop: 10,
          }}
        >
          <Text style={{ color: "#828282", fontSize: 10 }}>
            20 trường quan tâm
          </Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <MaterialIcons name="swap-vert" size={16} color="#EB9629" />
            <Text style={{ fontSize: 10, color: "#EB9629" }}>Sắp xếp</Text>
          </View>
        </View>
      </View>
      <View style={{ alignSelf: "center", marginTop: 20 }}>
        <FlatList
          data={bookmarkedItems}
          renderItem={({ item }) => <CardResult item={item} />}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
};

export default BookmarkScreen;

const styles = StyleSheet.create({});
