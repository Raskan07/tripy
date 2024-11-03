import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Colors } from '@/constants/Colors';
import CityCards from './cards/CityCards';

type Props = {
    heading?: string,
    subHeading?: string
}

const CityList = ({ heading, subHeading }: Props) => {
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
          renderItem={({ item }) => <CityCards />}
          keyExtractor={(item) => item.id} 
          horizontal={true}
          showsHorizontalScrollIndicator={false} 
        />
      </View>
    </View>
  );
};

export default CityList;

const styles = StyleSheet.create({});
