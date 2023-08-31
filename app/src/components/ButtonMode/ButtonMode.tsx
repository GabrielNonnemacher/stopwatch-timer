import React, { useState } from "react";
import { Pressable, Text, StyleSheet } from "react-native";
import { ViewModeEnum } from "../../common/enums/viewMode.enum";

export default function ButtonMode() {
    const [modeUsed, setModeUsed] = useState(ViewModeEnum.LightMode.id);

    return (
        <Pressable style={styles.container}
            onPress={() => {
                setModeUsed(
                    modeUsed === ViewModeEnum.DarkMode.id ? ViewModeEnum.LightMode.id : ViewModeEnum.DarkMode.id
                );
            }}>
            <Text>{modeUsed}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'rgb(20, 10, 244)',
        width: 80,
        height: 20,
    }
});
