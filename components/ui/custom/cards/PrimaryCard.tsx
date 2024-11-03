import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors'
import { Skeleton, SkeletonText } from '@/components/ui/skeleton';
import { LinearGradient } from 'expo-linear-gradient';

const PrimaryCard = () => {
    const rating = 4;
    const reviews = 132 ;

    const stars = Array.from({ length: rating }, (_, index) => (
      <LinearGradient
        key={index}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={['#ff3131', '#ff914d']}
        style={{width:12,height:12,borderRadius:10,marginHorizontal:2}}
      />
  ));


  if(!true){
    return (
      <View>
            <Skeleton variant="rounded" className="h-[200px] w-[200px] m-3" startColor="bg-background-800" />
            <SkeletonText className="mx-3 h-[10px] w-[180px] " startColor="bg-background-800" />
            <SkeletonText className="mx-3  mt-1 h-[10px] w-[150px] " startColor="bg-background-800" />
      </View>
    )
  }


  return (
    <TouchableOpacity style={{width:202,height:300,marginRight:13}}>
        <Image 
        style={{width:200,height:200,borderRadius:10}}
        source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeGW719hVuslYuS-VAad3Cik62zt1wF7j9ig&s"}} 
        />
        <Text style={{fontFamily:"roboto",fontSize:17,fontWeight:"700",color:Colors.text.primary,marginTop:5}}>The Gradnd case</Text>
        <View style={{flexDirection:"row",alignItems:"center"}}>
        {stars}
        <Text style={{color:Colors.text.secondary,marginLeft:5,fontFamily:"roboto",fontSize:10}}>{reviews}</Text>
        </View>
        <Text style={{fontFamily:"roboto",fontSize:14,fontWeight:"400",color:Colors.text.secondary,marginTop:1}}>Nuwera Eliya Sri Lanka</Text>
        

    </TouchableOpacity>
  )
}

export default PrimaryCard

const styles = StyleSheet.create({})
