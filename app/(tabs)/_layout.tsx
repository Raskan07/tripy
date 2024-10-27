import { Tabs } from "expo-router";
import React from "react";

import { Colors } from "@/constants/Colors";
import Feather from "@expo/vector-icons/Feather";
import AntDesign from "@expo/vector-icons/AntDesign";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { View, Text } from "react-native";
import { Image } from "react-native";
import AuthButton from "@/components/buttons/authButton";

export default function TabLayout() {
  const logo = require("@/assets/images/logo.png");
  const google = require("@/assets/images/google.png")
  const facebook = require("@/assets/images/facebook.png")

  const isLoggedIn = !true;

  if (isLoggedIn) {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: Colors.bg.primary,
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        <View className="flex flex-col items-start" style={{width:"90%"}}>
          <Image source={logo} className="w-[120px] h-[120px] " />
          <View className="mt-[20px]">
            <Text style={{fontFamily:"anton",fontSize:38}} className=" text-white mt-[5px]">
              Log in to start
            </Text>
            <Text style={{fontFamily:"anton",fontSize:38}} className=" text-white">
              Planning Your Trip
            </Text>

            {/* privacy note */}
            <Text style={{fontFamily:"roboto",fontSize:14,color:Colors.text.secondary}}>
              By proceeding, You agree to our <Text className="font-bold text-white underline"> terms of use </Text> . and confirm that you
              have read our <Text className="font-bold text-white underline">privacy policy </Text>.
            </Text>
          </View>

          {/* login Button */}

          <View style={{marginTop:15,width:"100%"}}>
            <AuthButton  title="Continue with Google" icon={google}/>
            <AuthButton title="Continue with Email  " isGoogle={false} />
          </View>

        </View>
      </View>
    );
  }
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor: Colors.bg.secondary,
          shadowColor: "#FFF",
          borderWidth: 0,
          borderTopWidth: 0,
        },
        tabBarActiveTintColor: Colors.text.primary,
        tabBarInactiveTintColor: Colors.text.secondary,
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <Feather name="home" size={size - 1} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="search1" size={size - 1} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="trips"
        options={{
          title: "trips",
          tabBarIcon: ({ color, size }) => (
            <SimpleLineIcons name="plane" size={size - 1} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="review"
        options={{
          title: "Review",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome6 name="message" size={size - 1} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="account"
        options={{
          title: "Account",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome6 name="user" size={size - 1} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
