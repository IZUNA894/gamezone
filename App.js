import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useState, useEffect, useCallback } from "react";
import Home from "./screens/Home";
import ReviewDetails from "./screens/ReviewDetails";
import About from "./screens/About";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Header from "./components/Header";

const Stack = createNativeStackNavigator();
SplashScreen.preventAutoHideAsync();
const Drawer = createDrawerNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="HomeStack"
      // screenOptions={{ headerShown: false }}
    >
      <Stack.Screen
        name="HomeStack"
        options={({ navigation, route }) => ({
          headerTitle: (props) => (
            <Header navigation={navigation} title="GameZone" />
          ),
        })}
        component={Home}
      />
      <Stack.Screen
        name="ReviewDetails"
        options={{
          title: "Review Details",
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 20,
            color: "#333",
            letterSpacing: 1,
          },
        }}
        component={ReviewDetails}
      />
    </Stack.Navigator>
  );
};

export default function App() {
  const [isLoaded] = useFonts({
    "nunito-regular": require("./assets/fonts/Nunito-Regular.ttf"),
    "nunito-bold": require("./assets/fonts/Nunito-Bold.ttf"),
  });
  const onLayoutRootView = useCallback(async () => {
    if (isLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [isLoaded]);

  if (!isLoaded) {
    return null;
  }

  return (
    <NavigationContainer onReady={onLayoutRootView}>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen
          name="Home"
          options={{ headerShown: false }}
          component={HomeStack}
        />
        <Drawer.Screen
          name="About"
          options={({ navigation, route }) => ({
            title: "About",

            headerTitleStyle: {
              fontWeight: "bold",
              fontSize: 20,
              color: "#333",
              letterSpacing: 1,
            },
            headerTitleAlign: "center",
          })}
          component={About}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
