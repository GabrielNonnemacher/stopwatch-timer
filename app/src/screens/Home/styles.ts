import { StyleSheet } from "react-native";

const PRIMARY_COLOR_LIGHT = '#8EA7FF';
const PRIMARY_COLOR_DARK = '#5359FF';
const BACKGROUND_LIGHT = '#FFFEE3';
const BACKGROUND_DARK = '#101010';

export const LIGHTMODE = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: BACKGROUND_LIGHT,
        width: 400,
        fontSize: 24,
    },
    primaryColor: {
        backgroundColor: PRIMARY_COLOR_LIGHT,
    }
});


export const DARKMODE = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: BACKGROUND_DARK,
        width: 400,
        fontSize: 24,
    },
    primaryColor: {
        backgroundColor: PRIMARY_COLOR_DARK,
    }
});
