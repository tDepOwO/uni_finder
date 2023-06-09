import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SimpleLineIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";
import { getDocs, collection } from "firebase/firestore";
import CardResult from "../components/CardResult";
import { getProducts } from "../CardReducer";
import { vw, vh, vmin, vmax } from 'react-native-expo-viewport-units';

const Location_HN = () => {
  const navigation = useNavigation();
  const card = useSelector((state) => state.card.card);
  const [filteredItems, setFilteredItems] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    if (card.length > 0) {
      filterItems();
    } else {
      const fetchProducts = async () => {
        const colRefs = collection(db, "uni_list");
        const docsSnap = await getDocs(colRefs);
        const fetchedItems = docsSnap.docs.map((doc) => doc.data());
        setFilteredItems(fetchedItems);
        fetchedItems.map((card) => dispatch(getProducts(card)));
      };
      fetchProducts();
    }
  }, [card]);

  const filterItems = () => {
    const filteredItems = card.filter((item) => item.city === "Hà Nội");
    setFilteredItems(filteredItems);
  };
  return (
    <View>
      <View
        style={{
          paddingTop: 60,
          backgroundColor: "#F9F4EE",
          // height: 200,
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
            marginHorizontal: 20,
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.goBack()}
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
            Các trường ở khu vực Hà Nội
          </Text>
        </View>
      </View>
      <ScrollView style={{ alignSelf: "center", marginTop: 20 }}>
        {filteredItems.map((item, index) => (
          <CardResult key={index} item={item} />
        ))}
      </ScrollView>
    </View>
  );
};

export default Location_HN;

const styles = StyleSheet.create({});
