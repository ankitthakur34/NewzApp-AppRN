import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Linking,
  ActivityIndicator,
} from "react-native";
import React, { useContext } from "react";
import { AppContext } from "../../Context/Context";

const Stories = () => {
  const { hits, page, nbPages, removePost, isLoading } = useContext(AppContext);
  if (isLoading) {
    return (
      <ActivityIndicator size="large" color="blue" style={{ marginTop: 40 }} />
    );
  }
  return (
    <View style={{ marginTop: 40, alignItems: "center" }}>
      {hits.map((elem, index) => {
        return (
          <View
            key={index}
            style={{
              width: "90%",
              backgroundColor: "lightgrey",
              borderRadius: 7,
              margin: 10,
              padding: 25,
              gap: 18,
              shadowColor: "black",

              elevation: 10,
            }}
          >
            <Text style={{ fontSize: 18, fontWeight: "600" }}>
              {elem.title}
            </Text>
            <View>
              <Text style={{ fontWeight: "300", letterSpacing: 1 }}>
                {elem.author} | {elem.num_comments} comments{" "}
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginHorizontal: 7,
              }}
            >
              <TouchableOpacity
                onPress={() =>
                  elem.url == null
                    ? alert("Link not available")
                    : Linking.openURL(elem?.url)
                }
              >
                <Text style={{ letterSpacing: 1, fontWeight: "400" }}>
                  Read More
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => removePost(elem.objectID)}>
                <Text
                  style={{ color: "red", letterSpacing: 1, fontWeight: "400" }}
                >
                  Remove
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        );
      })}
    </View>
  );
};

export default Stories;
