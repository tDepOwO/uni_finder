import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

const SearchBar = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity style={styles.searchBar}>
      <Ionicons
        name="ios-search-outline"
        size={24}
        color="#828282"
        style={styles.searchIcon}
      />

      <Text style={styles.textInput}>Tìm kiếm</Text>
    </TouchableOpacity>
  );
};

export default SearchBar;

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
