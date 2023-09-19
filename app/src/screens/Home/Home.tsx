import React, { useState } from "react";
import { Pressable, Text, View } from "react-native";
import { DARKMODE, LIGHTMODE } from "./styles";

export default function Home() {
    const [modeUser, setModeUser] = useState(LIGHTMODE);

    return (
        <View style={modeUser.container}>
            <Pressable style={modeUser.container}
                onPress={() => {

                    setModeUser(modeUser === DARKMODE ? LIGHTMODE : DARKMODE)
                }}>
                <Text style={modeUser.primaryColor}>{'Pressionar aqui'}</Text>
            </Pressable>
        </View>
    );
}