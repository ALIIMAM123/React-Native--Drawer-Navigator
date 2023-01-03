import { StyleSheet, View, Text, Button } from "react-native";

function UserScreen({ route, navigation }) {
	function openDrawerHandler() {
		navigation.toggleDrawer();
	}
	return (
		<View style={styles.userContainer}>
			<View style={styles.textContainer}>
				<Text>USER SCREEN</Text>
			</View>
			<Button title="Open Drawer" onPress={openDrawerHandler} />
		</View>
	);
}

export default UserScreen;

const styles = StyleSheet.create({
	userContainer: {
		flex: 1,
		padding: 10,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#b5f5b8",
	},
	textContainer: {
		backgroundColor: "white",
		padding: 20,
		borderRadius: 20,
		marginBottom: 20,
	},
});
