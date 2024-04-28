import React from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, SafeAreaView, ScrollView, View } from "react-native";
import { COLORS, icons, images, SIZES } from "./constants";
import {
  NearbyJobCard,
  Popularjobs,
  ScreenHeaderBtn,
  Welcome,
} from "./components";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="no"
          component={Welcome}
          options={{
            headerStyle: { backgroundColor: COLORS.lightWhite },
            headerShadowVisible: false,
            headerLeft: () => (
              <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" />
            ),
            headerRight: () => (
              <ScreenHeaderBtn iconUrl={images.profile} dimension="100%" />
            ),
          }}
        />
      </Stack.Navigator>
      <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{ flex: 1, padding: SIZES.medium }}>
            <Popularjobs />
            <NearbyJobCard />
          </View>
        </ScrollView>
      </SafeAreaView>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
