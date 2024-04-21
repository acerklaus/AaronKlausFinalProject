import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, View } from "react-native";
import { Button, Text } from "react-native-paper";
import { StackNavigation } from "../App";
 
const NavBar = () => {
    const { navigate } = useNavigation<StackNavigation>();

    return (
    <View style={styles.navBar}>
        <Button 
        style={styles.button}
        onPress={() => navigate('Home')}>
            <Text style={styles.text}>Home</Text>
        </Button>

        <Button 
        style={styles.button}
        onPress={() => console.log('Button with adjusted color pressed')}>
            <Text 
                style={styles.text}
                onPress={() => {navigate('Home'), navigate('Game')}}>New Game</Text>
        </Button>
     
    </ View>
    )
}

const styles = StyleSheet.create({
    navBar: {
       flexDirection: 'row',
       justifyContent: 'space-between',
     },
    button: {
        height: 60,
        width: 200,
        backgroundColor: '#87CEEB',
        justifyContent: 'center',
    },
    text: {
        fontSize: 15,
        fontWeight: 'bold',
    }
  });

export default NavBar;