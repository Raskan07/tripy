import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { Colors } from '@/constants/Colors';
import NewsCard from '../cards/NewsCard';

type Props = {
    heading?: string,
    subHeading?: string
}

const NewsList = ({ heading, subHeading }: Props) => {
  // Example data with unique ids
  const data = [
    { id: '1' },
    { id: '2' },
    { id: '3' },
    { id: '4' },
  ];

  return (
    <View style={{ marginTop: 20, justifyContent: "flex-start", flexDirection: "column",marginLeft:20 }}>
      <Text style={{ fontSize: 22, fontWeight: "700", fontFamily: "roboto", color: Colors.text.primary, textAlign: "left" }}>
        {heading}
      </Text>
      <Text style={{ fontSize: 15, fontFamily: "roboto", color: Colors.text.secondary }}>
        {subHeading}
      </Text>

      {/* Cards List */}
      <View style={{ marginTop: 15 }}>
        <FlatList
          data={data}
          renderItem={({ item }) => <NewsCard />}
          keyExtractor={(item) => item.id} 
        />


        <TouchableOpacity style={{width:"100%",alignItems:"center",justifyContent:"center",marginTop:20}}>
            <Text style={{color:Colors.text.primary,fontFamily:"roboto",fontSize:15,fontWeight:"700"}}>See More</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default NewsList;

const styles = StyleSheet.create({});
