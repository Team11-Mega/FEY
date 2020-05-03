import React, { useEffect, useState, Link } from 'react'
import { View, Image, Text, TouchableOpacity, TextInput, ImageBackground, ProgressBarAndroid, Dimensions } from 'react-native'
import styles from './styles'
import LogoImg from '../../assets/logo1g.png'
import LogoImg2 from '../../assets/logo2.png'
import Imgbtn from '../../assets/logotype.png'
import Imgbtn2 from '../../assets/logotype2.png'
import { Feather } from '@expo/vector-icons'

import { useNavigation, useRoute } from '@react-navigation/native'

export default function Cadastro() {
    const navigation = useNavigation();

    function navigateToLogin(){
        navigation.push('Login')
         
    }
    return (
        <View style={styles.containe} >
            <View style={styles.header}>
                <Image style={styles.tinyLogo} source={LogoImg2} />
            </View>

            <TextInput
                    style={styles.input}
                    onChangeText={() => { }}
                    //value={}

                    placeholder="Insira seu nome"
                />

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
                        <Text style={styles.actionText}>Cadastrar</Text>
                    </TouchableOpacity>
                    <Text style={styles.textStyle} >Esqueceu sua senha?</Text>
                </View>

                <View style={styles.footer}>
                    <TouchableOpacity disabled={false} onPress={navigateToLogin}>
                    <Text style={styles.text2}>Já tem uma conta? Acesse</Text>
                    </TouchableOpacity>
                    
                </View>
                
                
                
                   
                </View>   
       
        
    )
}