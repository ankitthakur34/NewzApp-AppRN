import { View, Text, TextInput } from "react-native";
import React, { useContext } from "react";
import { AppContext } from "../../Context/Context";

const Search = () => {
  const { query, searchPost } = useContext(AppContext);
  return (
    <View
      style={{
        width: "90%",
        height: 40,
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        borderWidth: 1.5,
        // marginHorizontal: 15,
        borderRadius: 7,
        backgroundColor: "white",
      }}
    >
      <TextInput
        placeholder="search here"
        value={query}
        onChangeText={(text) => searchPost(text)}
      />
    </View>
  );
};

export default Search;
