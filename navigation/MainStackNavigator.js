import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import TestScreen from "../screens/TestScreen";
import CheckPhotoScreen from "../screens/CheckPhotoScreen";
import LoadingPhotoScreen from "../screens/LoadingPhotoScreen";
import StartPageScreen from "../screens/StartPage";
import OptionsScreen from "../screens/OptionsScreen";

const Stack = createNativeStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Test"
        component={TestScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CheckPhoto"
        component={CheckPhotoScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="LoadingPhoto"
        component={LoadingPhotoScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="StartPage"
        component={StartPageScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Options"
        component={OptionsScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default MainStackNavigator;
