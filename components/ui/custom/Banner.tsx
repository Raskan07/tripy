import { View, Text,ImageBackground } from 'react-native'
import React from 'react'

const Banner = () => {
  return (
    <ImageBackground 
    resizeMode='cover'
    style={{width:"100%",height:450,justifyContent:"center",alignItems:"center",marginTop:40}}
    source={{uri:"https://img.freepik.com/premium-photo/group-friends-road-trip-driving-towards-mountains-lake_14117-748104.jpg?semt=ais_hybrid"}}>
      <Text>Banner</Text>
    </ImageBackground>
  )
}

export default Banner