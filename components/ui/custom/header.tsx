import { StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors'
import Feather from '@expo/vector-icons/Feather';

const Header = () => {
    const logo =  require("@/assets/images/logo.png")
  return (
    <View style={{width:"100%",flexDirection:"row",alignItems:"center",justifyContent:"space-between",marginTop:20}}>
        <View style={{flexDirection:"row",alignItems:"center",gap:10,padding:10}}>
        <Image source={logo} style={{width:40,height:40}} />
        <Text style={{fontFamily:"anton",fontSize:24,color:Colors.text.primary}}>Tripy</Text>
        </View>

        <TouchableOpacity>
            <Feather name="bell" size={22} color={Colors.text.primary} style={{padding:10}} />
        </TouchableOpacity>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({})