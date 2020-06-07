import React from 'react'
import { View, ScrollView, SafeAreaView } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import ButtonText from '../../components/ButtonText/ButtonText'

import styles from './styles'

const Home = () => {
    const navigation = useNavigation()

    function navigateCalculatorSquareBasket() {
        navigation.navigate('CalculatorSquareBasket')
    }

    function navigateCalculatorCircularBasket() {
        navigation.navigate('CalculatorCircularBasket')
    }

    return (
        <SafeAreaView>
            <ScrollView>
                <View>
                    <ButtonText onPress={navigateCalculatorCircularBasket}>Cestos circulares</ButtonText>
                    <ButtonText onPress={navigateCalculatorSquareBasket}>Cestos quadrados</ButtonText>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home