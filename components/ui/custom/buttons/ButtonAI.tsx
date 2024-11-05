import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';
import { Colors } from '@/constants/Colors';


type Props  = {
    title:string,
    onPress?:()=>void,
    iconName?: string
}

const ButtonAI = ({title,onPress,iconName}:Props) => {
  return (
    <TouchableOpacity style={{padding:8,backgroundColor:"#FFF",borderRadius:100,marginTop:15,flexDirection:"row",alignItems:"center",justifyContent:"center",gap:5,paddingVertical:10}}>
        {/* @ts-ignore */}
            <AntDesign name={iconName} size={24} color="gold" />
            <Text style={{fontFamily:"roboto",fontSize:16,color:Colors.bg.primary,textAlign:"center",fontWeight:"400"}}>{title}</Text>
    </TouchableOpacity>
  )
}

export default ButtonAI

const styles = StyleSheet.create({})