import React from 'react'
import { View, Text, ScrollView, SafeAreaView, TextInput } from 'react-native'
import NumberInput from '../../components/NumberInput/NumberInput'

import styles from './styles'

const CalculatorCircularBasket = () => {
    return (
        <SafeAreaView>
            <NumberInput inputName="Diâmetro" />
            <Text>CalculatorCircularBasket</Text>
        </SafeAreaView>
    )
}

export default CalculatorCircularBasket