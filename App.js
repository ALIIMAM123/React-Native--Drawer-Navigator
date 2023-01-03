import "react-native-gesture-handler";

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import UserScreen from "./screens/UserScreen";
import WelcomeScreen from "./screens/WelcomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";

const Drawer = createDrawerNavigator();

export default function App() {
	return (
		<NavigationContainer style={styles.container}>
			<Drawer.Navigator
				initialRouteName="User"
				screenOptions={{
					headerStyle: { backgroundColor: "#05960c" },
					headerTintColor: "white",
					headerTintColor: "white",

					drawerActiveBackgroundColor: "#05960c",
					drawerActiveTintColor: "white",
					drawerStyle: { backgroundColor: "#59c95e" },
				}}
			>
				<Drawer.Screen
					name="Welcome"
					component={WelcomeScreen}
					options={{
						drawerLabel: "Welcome Screen",
						drawerIcon: ({ color, size }) => (
							<Ionicons name="home" color={color} size={size} />
						),
					}}
				/>
				<Drawer.Screen
					name="User"
					component={UserScreen}
					options={{
						drawerIcon: ({ color, size }) => (
							<Ionicons name="person" color={color} size={size} />
						),
					}}
				/>
			</Drawer.Navigator>
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 30,
	},
});
