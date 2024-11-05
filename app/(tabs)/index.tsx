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
import Banner from "@/components/ui/custom/Banner";
import NewsCard from "@/components/ui/custom/cards/NewsCard";
import NewsList from "@/components/ui/custom/lists/NewsList";

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

          <Banner />
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


      <NewsList  heading="What's Latest News and Updates from Tripers" subHeading="Find the info you need" />

      <HomeCover title="Discover more in Sri lanka" iconName="caretright" iconRequired={true}  />

      </ScrollView>
    </SafeAreaView>
  );
}
