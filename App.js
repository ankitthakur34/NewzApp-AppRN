import { Platform, StyleSheet, Text, View, StatusBar } from "react-native";
import HomeScreen from "./src/screens/HomeScreen";

import AppProvider from "./Context/AppProvider";

export default function App() {
  return (
    <View>
      <AppProvider>
        <View>
          <StatusBar style={styles.andView} />
          <HomeScreen />
        </View>
      </AppProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  andView: {
    marginTop: Platform.OS === "android" ? StatusBar.length : 0,
  },
});
