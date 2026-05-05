import { NavigationContainer } from "@react-navigation/native";
import Login from "./src/Screens/Login";
import Register from "./src/Screens/Register";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

export default function App() {
  const Drawer = createDrawerNavigator();
  const BTab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Login" component={Login} />
        <Drawer.Screen name="Register" component={Register} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
