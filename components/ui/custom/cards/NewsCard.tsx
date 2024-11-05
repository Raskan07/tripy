import { StyleSheet, Text, View,Image,TouchableOpacity } from "react-native";
import React from "react";
import {
  Avatar,
  AvatarBadge,
  AvatarFallbackText,
  AvatarImage,
} from "../../avatar";
import AntDesign from '@expo/vector-icons/AntDesign';
import { Colors } from "@/constants/Colors";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

const NewsCard = () => {
  return (
    <TouchableOpacity
      style={{ width: "100%", alignItems: "center", justifyContent: "center",marginTop:20 }}
    >
      <View style={{ width: "95%", alignItems: "flex-start",flexDirection:"row",justifyContent:"space-between" }}>


        {/* profile */}
        <View>

          <Avatar size="sm">
            <AvatarFallbackText>Jane Doe</AvatarFallbackText>
            <AvatarImage
              source={{
                uri:
                  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
              }}
            />
            <AvatarBadge />
          </Avatar>

          <AntDesign name="retweet" size={15} color="#FFFFFF90" style={{marginTop:5}} />


        </View>

        {/* Image */}

        <Image style={{width:80,height:80,borderRadius:10,marginLeft:5,marginRight:5}} source={{uri:"https://thumbs.dreamstime.com/b/tropical-island-paradise-sea-beach-ocean-water-green-coconut-palm-tree-leaves-sand-sun-blue-sky-cloud-beautiful-nature-landscape-317237458.jpg"}} />

        <View>
            <View style={{flexDirection:"row",alignItems:"flex-start"}}>
                <Text style={{color:Colors.text.primary,fontFamily:"roboto",fontSize:16,width:"75%",fontWeight:"700"}}>
                    Cora showcase at indonasia Fashion Week On Bali
                </Text>

            </View>

            <Text style={{color:Colors.text.secondary,fontFamily:"roboto",fontSize:13,fontWeight:"400",marginTop:2}}>
                    December 2024 1 , 10:00 AM
             </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default NewsCard;

const styles = StyleSheet.create({});
