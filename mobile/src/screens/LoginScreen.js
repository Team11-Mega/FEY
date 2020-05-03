import React from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity ,Image} from 'react-native'
// import styles from '../pages/ScreenChat/styles'
import { Ionicicons } from '@expo/vector-icons'

export default class LoginScreen extends React.Component {
    state = {
        name: "mateus"
    }

    continue = () => {
        this.props.navigation.navigate("ScreenChat", { name: this.state.name })
    }


    render() {
        return (
            <View style={styles.container}>
                <View style={styles.circle} />
                <View style={{ marginTop: 64 }}>
                    {/* <Image source={require('../assets/logo.png')} style={{ width: 100, heght: 100, alignSelf: "center" }} /> */}
                </View>
                <View style={{ marginHorizontal: 32 }}>
                    <Text style={styles.header}>Username</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="teste"
                        onChangeText={name => { this.setState({ name }) }}
                        value={this.state.name}
                    />
                    <View style={{ alignItems: "flex-end", marginTop: 64 }}>
                        <TouchableOpacity style={styles.continue} onPress={this.continue}> 
                            <Text style={{color:"#fff"}}>Entrar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F4f5f7"
    },
    circle: {
        width: 500,
        height: 500,
        borderRadius: 500 / 2,
        backgroundColor: "#fff",
        position: "absolute",
        left: -120,
        top: -20
    },
    header: {
        fontWeight: "800",
        fontSize: 30,
        color: "#514e51",
        marginTop: 32
    },
    input: {
        marginTop: 32,
        height: 50,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: "#bab7c3",
        borderRadius: 30,
        paddingHorizontal: 16,
        color: "#514ea5"
    },

    continue: {
        width: 70,
        height: 70,
        borderRadius: 70 / 2,
        backgroundColor: "#9075e3",
        alignItems: "center",

        justifyContent: "center"
    }
})