import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import {
  Entypo,
  Ionicons,
  MaterialIcons,
  SimpleLineIcons,
} from "@expo/vector-icons";
import SearchBar from "../components/SearchBar";
import { useNavigation } from "@react-navigation/native";
import CardResult from "../components/CardResult";
import { uni_list } from "../data";
import { auth, db } from "../firebase";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../CardReducer";
import { TextInput } from "react-native-gesture-handler";

const HomeScreen = () => {
  const navigation = useNavigation();
  const [searchTerm, setSearchTerm] = useState("");
  const user = auth.currentUser;
  const card = useSelector((state) => state.card.card);
  const [items, setItems] = useState(card);
  const dispatch = useDispatch();

  useEffect(() => {
    if (card.length > 0) return;

    const fetchProducts = async () => {
      const colRef = collection(db, "uni_list");
      const docsSnap = await getDocs(colRef);
      const fetchedItems = [];
      docsSnap.forEach((doc) => {
        fetchedItems.push(doc.data());
      });
      setItems(fetchedItems);
      fetchedItems?.map((card) => dispatch(getProducts(card)));
    };

    fetchProducts();
  }, []);

  console.log(items);

  const onSearch = (text) => {
    const lowercaseSearchTerm = text.toLowerCase();
    const filteredData = card.filter((item) =>
      item.name.toLowerCase().includes(lowercaseSearchTerm)
    );
    setItems(filteredData);
    setSearchTerm(text);
  };
  return (
    <View>
      <View
        style={{
          backgroundColor: "#1C6D64",
          borderBottomLeftRadius: 30,
          borderBottomRightRadius: 30,
        }}
      >
        <View
          style={{
            marginTop: 60,
            flexDirection: "row",
            justifyContent: "space-between",
            marginHorizontal: 20,
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.openDrawer()}
            style={{
              borderRadius: 8,
              width: 42,
              height: 42,
              backgroundColor: "#208B83",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <SimpleLineIcons name="menu" size={16} color="white" />
          </TouchableOpacity>
          <View>
            <Image
              source={require("../storages/avt.png")}
              style={{ width: 42, height: 42, borderRadius: 8 }}
            />
          </View>
        </View>
        <View style={{ marginHorizontal: 20, marginTop: 10 }}>
          <Text style={{ fontSize: 14, color: "#FFFFFF" }}>
            Xin chào {user.email}
          </Text>
          <Text
            style={{
              fontSize: 16,
              color: "#FFFFFF",
              fontWeight: "700",
              width: 288,
              marginTop: 10,
            }}
          >
            Tìm kiếm trường Đại Học phù hợp nhất với bạn!
          </Text>
        </View>
        <View
          style={{
            backgroundColor: "#F9F4EE",
            width: "100%",
            height: 127,
            marginTop: 20,
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
              marginTop: 16,
              marginHorizontal: 20,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View style={styles.searchBar}>
              <Ionicons
                name="ios-search-outline"
                size={24}
                color="#828282"
                style={styles.searchIcon}
              />

              <TextInput
                value={searchTerm}
                onChangeText={onSearch}
                style={styles.textInput}
                placeholder="Tìm kiếm"
                o
              />
            </View>
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
              marginHorizontal: 20,
              justifyContent: "space-between",
              marginTop: 10,
            }}
          >
            <Text style={{ color: "#828282", fontSize: 10 }}></Text>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <MaterialIcons name="swap-vert" size={16} color="#EB9629" />
              <Text style={{ fontSize: 10, color: "#EB9629" }}>Sắp xếp</Text>
            </View>
          </View>
          {/* <View
            style={{
              flexDirection: "row",
              marginTop: 10,
              marginHorizontal: 20,
            }}
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
                Tag
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
                Tag
              </Text>
            </View>
          </View> */}
        </View>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          alignSelf: "center",
          marginTop: 28,
        }}
      >
        {items.map((item, index) => (
          <CardResult key={index} item={item} />
        ))}
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#C8E1DE",
    height: 45,
    borderRadius: 15,
    width: 300,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
  },
  searchIcon: {
    marginHorizontal: 14,
  },
  textInput: {
    flex: 1,
    color: "#828282",
  },
});
