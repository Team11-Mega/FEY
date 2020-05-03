import React, { useEffect, useState, Link } from 'react'
import { View, Image, Text, TouchableOpacity, TextInput, ImageBackground, ProgressBarAndroid, Dimensions } from 'react-native'
import styles from './styles'
import LogoImg from '../../assets/logo1g.png'
import Imgbtn from '../../assets/logotype.png'
import Imgbtn2 from '../../assets/logotype2.png'
import { Feather } from '@expo/vector-icons'


import { useNavigation, useRoute } from '@react-navigation/native'

export default function Login() {
   
    const navigation = useNavigation();

    function navigateToCadastro(){
        navigation.push('Register')
         
    }
    function goToHome(){
        navigation.push('ScreenChat')
         
    }

    return (
        <View style={styles.containe} >
            <View style={styles.header}>
                <Image style={styles.tinyLogo} source={LogoImg} /><Text style={{color:"white"}}></Text>
            </View>
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
                    <TouchableOpacity disabled={false} style={styles.action} onPress={goToHome} >
                        <Text style={styles.actionText}>Entrar</Text>
                    </TouchableOpacity>
                    <Text style={styles.textStyle} >Esqueceu sua senha?</Text>
                </View>

                <Text style={styles.text2}>Ou entre com:</Text>

                <View style={styles.actions2}>
                   
                    <TouchableOpacity disabled={false} style={styles.action2}>
                    <Image style={styles.imgbtn} source={Imgbtn2}/>
                    </TouchableOpacity>

                    <TouchableOpacity disabled={false} style={styles.action2}  >
                        <Image style={styles.imgbtn} source={Imgbtn}/>
                    </TouchableOpacity>
                    
                    
                </View>

                <View style={styles.footer}>
                    <TouchableOpacity onPress={navigateToCadastro} >
                    <Text style={styles.text2}>Não tem uma conta?Cadastre-se</Text>
                    </TouchableOpacity>
                    
                </View>
                
                
                
                   
                </View>   
       
        
    )
}
