import { StyleSheet, Text, View,TouchableOpacity,TextInput } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors'
import EvilIcons from '@expo/vector-icons/EvilIcons';

const SearchBar = () => {
  return (

    <View className='sticky' style={{width:"100%",flexDirection:"row",alignItems:"center",justifyContent:"center",marginTop:20,}}>
      <TouchableOpacity style={{width:"90%",padding:8,backgroundColor:Colors.bg.secondary,borderRadius:50,flexDirection:"row",alignItems:"center",justifyContent:"space-between",borderColor:"#ffffff90",borderWidth:1}}>
      <EvilIcons name="search" size={24} color={Colors.text.primary} />
      <TextInput style={{width:"90%"}} placeholder='Places to go , Things to do ' placeholderTextColor={"gray"} />
      </TouchableOpacity>
    </View>
  )
}

export default SearchBar

const styles = StyleSheet.create({})