import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors'
import SearchBar from '@/components/ui/custom/SearchBar'
import CustomList from '@/components/ui/custom/customList'
import HomeCover from '@/components/ui/custom/HomeCover'
import { ScrollView } from "react-native-virtualized-view";


const Search = () => {
  return (
    <ScrollView>
    <View style={{width:"100%",height:"100%",backgroundColor:Colors.bg.primary}}>
      <Text style={{fontFamily:"anton",fontSize:28,color:Colors.text.primary,padding:10,marginLeft:10,marginTop:20}}>Search</Text>

      <SearchBar />

      <CustomList heading='Top Experience on Tripy' subHeading=''  />

      <HomeCover title='Dont Look Away , find your sparks' iconName='caretright' iconRequired={true} buttonRequired={false} containerStyle={{marginTop:-10}} />
    </View>
    </ScrollView>
  )
}

export default Search

const styles = StyleSheet.create({})