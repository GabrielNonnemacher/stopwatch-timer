import React from "react";
import { View, StyleSheet } from "react-native";
import ButtonMode from "../../components/ButtonMode/ButtonMode";

export default function Home() {
    return (
        <View style={styles.container}>
            <ButtonMode />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgb(20, 180, 23)',
      width: 400,
    }
  });