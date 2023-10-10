import React, { useState } from "react";
import { Pressable, StatusBar, Text, View } from "react-native";
import { BUTTONMODE, DARKMODE, LIGHTMODE } from "./styles";

export default function Home() {
    const [modeUser, setModeUser] = useState(LIGHTMODE);

    return (
        <View style={modeUser.container}>
            <StatusBar barStyle={"light-content"}
                backgroundColor={'#101010'} />

            <View style={modeUser.container}>
                <Pressable style={BUTTONMODE.container}
                    onPress={() => {
                        setModeUser(modeUser === DARKMODE ? LIGHTMODE : DARKMODE)
                    }}>
                    <Text style={modeUser.primaryColor}>{'Pressionar aqui'}</Text>
                </Pressable>
            </View>

        </View>
    );
}