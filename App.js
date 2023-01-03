// import "react-native-gesture-handler";

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import UserScreen from "./screens/UserScreen";
import WelcomeScreen from "./screens/WelcomeScreen";
import { NavigationContainer } from "@react-navigation/native";
// import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

const BottomTab = createBottomTabNavigator();
//check

export default function App() {
	return (
		<NavigationContainer style={styles.container}>
			<BottomTab.Navigator
				initialRouteName="User"
				screenOptions={{
					headerStyle: { backgroundColor: "#05960c" },
					headerTintColor: "white",
					headerTintColor: "white",
					tabBarActiveTintColor: "white",
					tabBarActiveBackgroundColor: "green",
				}}
			>
				<BottomTab.Screen
					name="Welcome"
					component={WelcomeScreen}
					options={{
						tabBarIcon: ({ color, size }) => (
							<Ionicons name="home" color={color} size={size} />
						),
					}}
				/>
				<BottomTab.Screen
					name="User"
					component={UserScreen}
					options={{
						tabBarIcon: ({ color, size }) => (
							<Ionicons name="person" color={color} size={size} />
						),
					}}
				/>
			</BottomTab.Navigator>
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 30,
	},
});
