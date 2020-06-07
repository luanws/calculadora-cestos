import React from 'react'
import { View, Text, ScrollView, SafeAreaView, TextInput } from 'react-native'

import styles from './styles'

const CalculatorSquareBasket = () => {
    return (
        <SafeAreaView>
            <TextInput style={styles.textInput} placeholder="Input"></TextInput>
            <Text>CalculatorSquareBasket</Text>
        </SafeAreaView>
    )
}

export default CalculatorSquareBasket