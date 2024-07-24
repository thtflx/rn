import { StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <Text>Hello World</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignltems: "center",
        justifyContent: "center",
        marginLeft: 'auto',
        marginRight: 'auto'
    }
})