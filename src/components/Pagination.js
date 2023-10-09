import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { useContext } from "react";
import { AppContext } from "../../Context/Context";

const Pagination = () => {
  const { getPrevPage, getNextPage, page, nbPages } = useContext(AppContext);
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20,
        gap: 12,
      }}
    >
      <TouchableOpacity style={styles.btn} onPress={() => getPrevPage()}>
        <Text style={styles.btnText}>Prev</Text>
      </TouchableOpacity>
      <Text>
        {page + 1} of {nbPages}
      </Text>
      <TouchableOpacity style={styles.btn} onPress={() => getNextPage()}>
        <Text style={styles.btnText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  btn: {
    backgroundColor: "rgba(78, 116, 289, 1)",
    width: 70,
    height: 35,
    padding: 8,
    color: "white",
    borderRadius: 5,
  },
  btnText: {
    textAlign: "center",
    color: "white",
    fontWeight: "600",
    letterSpacing: 1,
  },
});

export default Pagination;
