import React, { useState, useEffect } from 'react'
import { View, Text, ScrollView, SafeAreaView, TextInput } from 'react-native'
import NumberInput from '../../components/NumberInput/NumberInput'

import CircularBasket from '../../models/CircularBasket'
import styles from './styles'

const CalculatorCircularBasket = () => {
    const [diameter, setDiameter] = useState(0)
    const [height, setHeight] = useState(0)

    const [baseArea, setBaseArea] = useState(0)
    const [sideArea, setSideArea] = useState(0)
    const [totalArea, setTotalArea] = useState(0)
    const [wireWeight, setWireWeight] = useState(0)
    const [estimulatedTime, setEstimulatedTime] = useState(0)
    const [realTime, setRealTime] = useState(0)
    const [wirePrice, setWirePrice] = useState(0)
    const [laborPrice, setLaborPrice] = useState(0)
    const [totalWithoutProfit, setTotalWithoutProfit] = useState(0)
    const [maxPrice, setMaxPrice] = useState(0)

    const circularBasket = new CircularBasket()

    useEffect(() => {
        circularBasket.diameter = diameter
        circularBasket.height = height
        setBaseArea(circularBasket.baseArea)
        setSideArea(circularBasket.sideArea)
        setTotalArea(circularBasket.totalArea)
        setWireWeight(circularBasket.wireWeight)
        setEstimulatedTime(circularBasket.estimulatedTime)
        setRealTime(circularBasket.realTime)
        setWirePrice(circularBasket.wirePrice)
        setLaborPrice(circularBasket.laborPrice)
        setTotalWithoutProfit(circularBasket.totalWithoutProfit)
        setMaxPrice(circularBasket.maxPrice)
    }, [diameter, height])

    function maskNumber(n: number): string {
        return String(n.toFixed(2)).replace('.', ',')
    }

    return (
        <SafeAreaView>
            <View style={{ margin: 8 }}>
                <NumberInput onChangeNumber={setDiameter} placeholder="Diâmetro (cm)" inputName="Diâmetro" />
                <NumberInput onChangeNumber={setHeight} placeholder="Altura (cm)" inputName="Altura" />
                <Text>Diâmetro (cm): {diameter}</Text>
                <Text>Altura (cm): {height}</Text>

                <Text>Área da base (cm²): {maskNumber(baseArea)}</Text>
                <Text>Área lateral (cm²): {maskNumber(sideArea)}</Text>
                <Text>Área total (cm²): {maskNumber(totalArea)}</Text>
                <Text>Peso em fio (Kg): {maskNumber(wireWeight)}</Text>
                <Text>Tempo estimado (h): {maskNumber(estimulatedTime)}</Text>
                <Text>Tempo real (h): {maskNumber(realTime)}</Text>
                <Text>Preco em fio: {maskNumber(wirePrice)}</Text>
                <Text>Preço mão de obra: {maskNumber(laborPrice)}</Text>
                <Text>Total sem lucro: {maskNumber(totalWithoutProfit)}</Text>
                <Text>Preço máximo: {maskNumber(maxPrice)}</Text>
            </View>
        </SafeAreaView>
    )
}

export default CalculatorCircularBasket