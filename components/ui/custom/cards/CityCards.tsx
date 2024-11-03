import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import React from "react";

const CityCards = () => {
  return (
    <TouchableOpacity style={{ width: 220, height: 155,marginRight:15 }}>
      <ImageBackground
        style={styles.imageBackground}
        source={require("@/assets/images/sriLanka.jpg")}
        borderRadius={15}
      >
        <Text style={styles.text}>Sri Lanka</Text>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default CityCards;

const styles = StyleSheet.create({
  imageBackground: {
    width: 220,
    height: 155,
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  text: {
    color: "#fff",
    fontSize: 24,
    padding: 10,
    fontFamily: "anton",
  },
});
