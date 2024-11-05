import { StyleSheet, Text, TouchableOpacity, View,ImageBackground, ViewProps } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors'
import AntDesign from '@expo/vector-icons/AntDesign';
import ButtonAI from './buttons/ButtonAI';


type Props = {
  title : string,
  onPress?:()=>void,
  iconName?: string,
  buttonTitle?:string,
  iconRequired?: boolean,
  containerStyle?:ViewProps['style'],
  buttonRequired?:boolean

}

const HomeCover = ({title,onPress,iconName,buttonTitle,iconRequired,containerStyle,buttonRequired=true}:Props) => {
  return (
    <View style={[containerStyle,{width:"100%",alignItems:"center",justifyContent:"center",marginTop:20,marginBottom:20}]}>
      <View style={{width:"90%",backgroundColor:Colors.bg.secondary,borderRadius:25,padding:10,paddingTop:30,paddingBottom:30,alignItems:"center",justifyContent:"center",borderWidth:1,borderColor:"#FFF"}}>
        <Text style={{fontFamily:"anton",fontSize:25,color:Colors.text.primary,textAlign:"center"}}>
            {title}
        </Text>

        {/* @ts-ignore */}
        {buttonRequired &&<ButtonAI  title={buttonTitle} iconName={iconRequired&&iconName}/>}
      </View>
    </View>
  )
}

export default HomeCover

const styles = StyleSheet.create({})