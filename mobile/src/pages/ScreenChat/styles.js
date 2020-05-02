import { StyleSheet } from 'react-native'
import Constants from 'expo-constants'
export default StyleSheet.create({
    containe: {
        flex: 1,
        paddingHorizontal: 24,
        backgroundColor: "#0d47a1",
        paddingTop: Constants.statusBarHeight + 20,
    },
    header: {
        paddingHorizontal: 8,
        flexDirection: 'row',
        paddingTop: Constants.statusBarHeight + 80,
        backgroundColor: '#00451D',
    },
    arrowLeft: {
        position: "absolute",
        left: 5,
        top: 60,
    },

    configIcon: {
        position: "absolute",
        right: 8,
        top: 58,
    },

    headerText: {
        position: 'absolute',
        left: '30%',
        top: 60,
        color:'#fff',
        fontWeight:'bold',
        fontSize: 21,
    }
})