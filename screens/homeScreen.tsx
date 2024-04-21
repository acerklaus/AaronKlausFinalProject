import React from "react";
import { StyleSheet, Text } from "react-native";
import { StackNavigation } from "../App";
import { useNavigation } from "@react-navigation/native";
import { Button } from "react-native-paper";

const HomeScreen = () => {
    const { navigate } = useNavigation<StackNavigation>();

    return (
        <>
        <Text style={styles.text}>
            Welcome to GeoQuizzer
        </Text>
        <Button 
            style={styles.button}
            onPress={() => navigate('Game')}>
                <Text> 
                    Start a New Game
                </Text>
        </Button>

        <Text style={styles.text}> 
           Made for Aaron Klaus's Mobile App Dev Final        
        </Text>
        </>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({

    button: {
        height: 60,
        width: 250,
        backgroundColor: '#87CEEB',
        justifyContent: 'center',
        marginTop: 200,
        marginLeft: 75,
        alignContent: 'center',
    },
    text: {
        fontSize: 50,
        alignContent: 'center',
        justifyContent: 'center',
        fontWeight: 'bold',
        marginLeft: 75,
        marginTop: 125,
    }
   
  });