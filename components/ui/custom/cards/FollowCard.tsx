import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { Colors } from "@/constants/Colors";
import {
  Avatar,
  AvatarBadge,
  AvatarFallbackText,
  AvatarImage,
} from "@/components/ui/avatar";
import { LinearGradient } from 'expo-linear-gradient';
import AntDesign from '@expo/vector-icons/AntDesign';


const FollowCard = () => {
    const [dis,setDisplay] = useState("flex")
  return (
    <View style={{display:"flex",marginHorizontal:10,padding:5}}>

    <View
      style={{
        width: 130,
        height: 140,
        borderWidth: 1,
        borderColor: "#FFFFFF80",
        backgroundColor: Colors.bg.secondary,
        borderRadius: 10,
        marginTop: 10,
        alignItems: "center",
        justifyContent: "center",
      }}
    >


        <AntDesign name="close" size={18} color={Colors.bg.secondary} style={{bottom:25,backgroundColor:"#FFF",borderRadius:30,padding:5,left:60}} />


      <Avatar size="lg">
        <AvatarFallbackText style={{color:Colors.text.secondary}} >
            Raskan Jiffry
        </AvatarFallbackText>
        <AvatarImage source={{uri:"https://t4.ftcdn.net/jpg/03/26/98/51/360_F_326985142_1aaKcEjMQW6ULp6oI9MYuv8lN9f8sFmj.jpg"}} />
        <AvatarBadge />
      </Avatar>

      <Text style={{fontFamily:"roboto",fontSize:15,color:Colors.text.primary,marginTop:10,textAlign:"center",fontWeight:"700",}}>Raskan Jiffry</Text>
    </View>



    


    <TouchableOpacity>
    <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={['#ff3131', '#ff914d']}
        style={{width:130,paddingHorizontal:10,paddingVertical:5,borderRadius:75,alignItems:"center",marginTop:10,justifyContent:"center"}}
      >
    
        <Text style={{color:Colors.text.primary,fontFamily:"roboto",fontSize:15,fontWeight:"700",textAlign:"center"}}>Follow</Text>
    </LinearGradient>
    </TouchableOpacity>


    </View>
  );
};

export default FollowCard;

const styles = StyleSheet.create({});
