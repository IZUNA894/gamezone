import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { globalStyles } from "../styles/global";

export default function About({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={globalStyles.titleText}>
        This app is made in process of learning react-native.
      </Text>
      <Text style={globalStyles.titleText}>
        Made with
        <Image source={require("./../assets/rating-1.png")} /> by Sanyam Jain
      </Text>

      <Text style={globalStyles.titleText}>
        {"\n"}
        {"\n"}
        Contact me at:{"\n"} jainsanyamco@gmail.com
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});
