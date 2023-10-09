import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "../components/Header";
import Search from "../components/Search";
import Pagination from "../components/Pagination";
import Stories from "../components/Stories";
import { ScrollView } from "react-native";

const HomeScreen = () => {
  return (
    <ScrollView>
      <Header />
      <Search />
      <Pagination />
      <Stories />
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
