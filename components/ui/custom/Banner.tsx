import { View, Text, ImageBackground } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import ButtonAI from "./buttons/ButtonAI";

const Banner = () => {
  return (
    <ImageBackground
      resizeMode="cover"
      style={{ width: "100%", height: 450, marginTop: 40,marginBottom:30,alignItems:"flex-start",justifyContent:"flex-end" }}
      source={require("@/assets/images/banner.jpg")}
    >

      <View style={{width:"75%",alignItems:"flex-start",padding:10}}>
        <Text style={{fontFamily:"anton",color:Colors.text.primary,fontSize:50}}>
          Get the Custom Plan For you Next Trip
        </Text>

        <Text style={{fontSize:14,fontFamily:"roboto",color:"#ffffff90",marginTop:10,width:"80%"}}>
          Find the Great eats , experience and more inspired by things you love
        </Text>

        <ButtonAI  title='Start a Trip with AI' iconName='dingding'/>

      </View>
    </ImageBackground>
  );
};

export default Banner;
