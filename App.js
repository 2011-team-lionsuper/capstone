import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./src/screens/HomeScreen";
import StepsScreen from "./src/screens/StepsScreen";
import WelcomeScreen from "./src/screens/WelcomeScreen";
import SignUpScreen from "./src/screens/SignUpScreen";
import { Provider } from "react-redux";
import store from "./src/store";
import AllFriendsScreen from "./src/screens/AllFriendsScreen";

const Stack = createStackNavigator();

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Steps" component={StepsScreen} />
          <Stack.Screen name="Welcome" component={WelcomeScreen} />

          <Stack.Screen name="SignUp" component={SignUpScreen} />

          <Stack.Screen name="Friends" component={AllFriendsScreen} />

        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
