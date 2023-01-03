import { StyleSheet, View, Text } from "react-native";

function WelcomeScreen() {
	return (
		<View style={styles.welcomeContainer}>
			<View style={styles.textContainer}>
				<Text>WELCOME SCREEN</Text>
			</View>
		</View>
	);
}

export default WelcomeScreen;

const styles = StyleSheet.create({
	welcomeContainer: {
		flex: 1,
		padding: 40,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "#cbf2ee",
	},
	textContainer: {
		backgroundColor: "white",
		padding: 20,
		borderRadius: 20,
	},
});
