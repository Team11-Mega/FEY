import { StyleSheet } from 'react-native'
import Constants from 'expo-constants'
export default StyleSheet.create({
    containe: {
        flex: 1,
        paddingHorizontal: 24,
        backgroundColor:"#0d47a1",
        paddingTop: Constants.statusBarHeight + 20,
    },

    header: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center'
    },

    loginContainer: {
        flex: 2,
        padding: 40,
        borderRadius: 8,
        backgroundColor: "#fff",
        marginBottom: 40,
        marginTop: 30,
        paddingBottom: 0,
        elevation: 10,
    },

    title: {
        fontSize: 21,
        color: "black",
        textAlign: 'center',
        fontWeight: "bold",
    },

    title_login: {
        fontSize: 19,
        color: "black",
        fontWeight: "bold",
        marginTop: 90,
    },


    contactBox: {
        padding: 19,
        borderRadius: 8,
        backgroundColor: "#fff",
        marginBottom: 16,
        elevation: 30,

    },

    input: {
        width: '100%',
        fontSize: 18,
        borderRadius: 8,
        height: 60,
        borderWidth: 1,
        marginTop: 20,
        padding: 10,
        borderColor: '#dcdce6',

    },

    image: {
        flex: 1,
        resizeMode: "stretch",

    },


    actions: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    action: {
        backgroundColor: "#002171",
        borderRadius: 8,
        height: 50,
        width: '40%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20
    },

    actionText: {
        color: "#FFF",
        fontSize: 21,
        fontWeight: 'bold'
    },
    creatText: {
        marginTop: 10,
        color: "black",
        fontSize: 14,
    },

    progress: {
        zIndex: 1,
        justifyContent: 'center',

    },
    tinyLogo: {
        width: 70,
        height: 70,
      },
})