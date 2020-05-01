import React, { useEffect, useState, Link } from 'react'
import { View, Image, Text, TouchableOpacity, TextInput, ImageBackground, ProgressBarAndroid, Dimensions } from 'react-native'
import styles from './styles'
import LogoImg from '../../assets/logo1.png'
import { Feather } from '@expo/vector-icons'

import { useNavigation, useRoute } from '@react-navigation/native'

export default function Login() {
    return (
        <View style={styles.containe} >
            <View style={styles.header}>
                <Image style={styles.tinyLogo} source={LogoImg} /><Text style={{color:"white"}}>TESTE</Text>
            </View>

            <View style={styles.loginContainer}>
                <Text style={[styles.title, { marginTop: 0 }]} >Bem-Vindo</Text>
                <Text style={styles.title_login} >Login:</Text>

                <TextInput
                    style={styles.input}
                    onChangeText={() => { }}
                    //value={}

                    placeholder="Insira seu E-Mail"
                />

                <TextInput
                    style={styles.input}
                    onChangeText={() => { }}
                    //value={}

                    placeholder="Insira sua senha"
                />


                <View style={styles.actions}>
                    <TouchableOpacity disabled={false} style={styles.action} onPress={() => { }} >
                        <Text style={styles.actionText}>Entrar</Text>
                    </TouchableOpacity>
                    <ProgressBarAndroid animating={false} styleAttr={'Small'} color="#fff" />
                </View>
                
            </View>
        </View>
    )
}