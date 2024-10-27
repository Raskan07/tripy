import { StyleSheet, Text, View,TouchableOpacity,Image } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors'
import Entypo from '@expo/vector-icons/Entypo';

type Props = {
    title?:string,
    icon?:string,
    isGoogle?:boolean
}

const AuthButton = ({title,icon,isGoogle=true}:Props) => {
  return (
    <TouchableOpacity style={{width:"100%",borderWidth:1,borderColor:"#FFF",borderRadius:40, padding:10,flexDirection:"row",justifyContent:"center",alignItems:"center",marginTop:20,gap:10}}>
        {/* @ts-ignore */}
        { isGoogle ? <Image  source={icon} style={{width:24,height:24,resizeMode:"contain"}} /> : <Entypo name="mail" size={24} color="#FFF" />}
      <Text style={{color:Colors.text.primary,fontSize:18,fontFamily:"roboto",fontWeight:"600"}} >{title}</Text>
    </TouchableOpacity>
  )
}

export default AuthButton

const styles = StyleSheet.create({})