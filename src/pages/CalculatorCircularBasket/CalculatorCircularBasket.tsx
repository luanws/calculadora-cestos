import React, { useState, useEffect } from 'react'
import { View, Text, ScrollView, SafeAreaView, TextInput } from 'react-native'
import NumberInput from '../../components/NumberInput/NumberInput'

import CircularBasket from '../../models/CircularBasket'
import styles from './styles'

const CalculatorCircularBasket = () => {
    const [diameter, setDiameter] = useState(0)

    const circularBasket = new CircularBasket()

    useEffect(() => {
        circularBasket.diameter = diameter
        console.log('opa')
    }, [diameter])

    return (
        <SafeAreaView>
            <View style={{ margin: 8 }}>
                <NumberInput onChangeNumber={setDiameter} inputName="Diâmetro" />
                <Text>{circularBasket.diameter}</Text>
            </View>
        </SafeAreaView>
    )
}

export default CalculatorCircularBasket