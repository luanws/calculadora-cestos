import React from 'react'
import { View, Text, ScrollView, SafeAreaView } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import ButtonText from '../../components/ButtonText/ButtonText'

import styles from './styles'

const Home = () => {
    const navigation = useNavigation()

    function navigateCalculatorSquareBasket() {
        navigation.navigate('CalculatorSquareBasket')
    }

    return (
        <SafeAreaView>
            <ScrollView>
                <View>
                    <ButtonText onPress={navigateCalculatorSquareBasket}>Cestos quadrados</ButtonText>
                    <ButtonText onPress={() => { }}>Cestos circulares</ButtonText>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home