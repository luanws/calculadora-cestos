import React from 'react'
import { View, Text, ScrollView, SafeAreaView, TextInput } from 'react-native'

import styles from './styles'

const CalculatorCircularBasket = () => {
    return (
        <SafeAreaView>
            <TextInput style={styles.textInput} placeholder="Input"></TextInput>
            <Text>CalculatorCircularBasket</Text>
        </SafeAreaView>
    )
}

export default CalculatorCircularBasket