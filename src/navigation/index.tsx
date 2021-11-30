import React from "react";
import { NavigationContainer, ParamListBase } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../components/screens/Home";
import Movie from "../components/screens/Movie";
const Navigation: React.FC = () => {
  const Stack = createNativeStackNavigator<ParamListBase>();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
            statusBarHidden: false,
          }}
        />
        <Stack.Screen
          name="Movie"
          component={Movie}
          options={{
            headerShown: false,
            statusBarHidden: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
