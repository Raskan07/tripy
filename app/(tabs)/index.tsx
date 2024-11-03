import {
  View,
  Text,
  SafeAreaView,
} from "react-native";

import { Colors } from "@/constants/Colors";
import Header from "@/components/ui/custom/header";
import SearchBar from "@/components/ui/custom/SearchBar";
import HomeCover from "@/components/ui/custom/HomeCover";
import CustomList from "@/components/ui/custom/customList";
import { ScrollView } from "react-native-virtualized-view";
import FollowCard from "@/components/ui/custom/cards/FollowCard";
import FollowList from "@/components/ui/custom/FollowList";
import CityCards from "@/components/ui/custom/cards/CityCards";
import CityList from "@/components/ui/custom/CityList";

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <ScrollView style={{backgroundColor:Colors.bg.primary}}>
        <View
          style={{
            flex: 1,
            backgroundColor: Colors.bg.primary,
            width: "100%",
            height:"100%",
            alignItems: "center",
          }}
        >
          <Header />
          <SearchBar />
          <HomeCover />
        </View>


        
          <CustomList
            heading="You Might Like these"
            subHeading="More places around You"
          />
          <CustomList
            heading="You Might Like these"
            subHeading="More places around You"
          />

          <FollowList 
            heading="Follow Best Travellers"
            subHeading="Find inpiration from them "
             />

        <CustomList
            heading="You Might Like these"
            subHeading="More places around You"
          />

        <CityList 
           heading="You Might Like these"
           subHeading="More places around You"
        />

      </ScrollView>
    </SafeAreaView>
  );
}
