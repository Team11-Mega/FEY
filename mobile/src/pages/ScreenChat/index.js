import React, { useEffect, useState, Link } from 'react'
import { View, Image, Text, TouchableOpacity, TextInput, ImageBackground, ProgressBarAndroid, Dimensions } from 'react-native'
import styles from './styles'
import ArrowLeft from '../../assets/arrowsLeft.png'
import ConfigIcon from '../../assets/config.png'
import { Feather } from '@expo/vector-icons'

import { useNavigation, useRoute } from '@react-navigation/native'

export default function ScreenChat() {
    return (
        <View style={styles.header}>
            <Image style={styles.arrowLeft} source={ArrowLeft} />
            <Image style={styles.configIcon} source={ConfigIcon} />
            <Text style={styles.headerText} >ChatBot FEY</Text>

        </View>
    )
}