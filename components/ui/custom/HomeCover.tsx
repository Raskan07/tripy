import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors'
import AntDesign from '@expo/vector-icons/AntDesign';

const HomeCover = () => {
  return (
    <View style={{width:"100%",alignItems:"center",justifyContent:"center",marginTop:20}}>
      <View style={{width:"90%",backgroundColor:Colors.bg.secondary,borderRadius:25,padding:10,paddingTop:30,paddingBottom:30,alignItems:"center",justifyContent:"center"}}>
        <Text style={{fontFamily:"anton",fontSize:25,color:Colors.text.primary,textAlign:"center"}}>
            Expereinec AI Power Trip
        </Text>

        <TouchableOpacity style={{padding:8,backgroundColor:"#FFF",borderRadius:100,marginTop:15,flexDirection:"row",alignItems:"center",justifyContent:"center",gap:5,paddingVertical:10}}>
            <AntDesign name="dingding" size={24} color="gold" />
            <Text style={{fontFamily:"roboto",fontSize:16,color:Colors.bg.primary,textAlign:"center",fontWeight:"400"}}>Start a Trip with AI</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default HomeCover

const styles = StyleSheet.create({})