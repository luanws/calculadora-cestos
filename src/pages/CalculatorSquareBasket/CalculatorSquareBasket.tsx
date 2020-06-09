import React, { useState, useEffect } from 'react'
import { View, Text, ScrollView, SafeAreaView, TextInput } from 'react-native'
import NumberInput from '../../components/NumberInput/NumberInput'
import ShowNumber from '../../components/ShowNumber/ShowNumber'

import SquareBasket from '../../models/SquareBasket'
import styles from './styles'

const CalculatorSquareBasket = () => {
    const [side1, setSide1] = useState(0)
    const [side2, setSide2] = useState(0)
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

    const squareBasket = new SquareBasket()

    useEffect(() => {
        squareBasket.side1 = side1
        squareBasket.side2 = side2
        squareBasket.height = height
        setBaseArea(squareBasket.baseArea)
        setSideArea(squareBasket.sideArea)
        setTotalArea(squareBasket.totalArea)
        setWireWeight(squareBasket.wireWeight)
        setEstimulatedTime(squareBasket.estimulatedTime)
        setRealTime(squareBasket.realTime)
        setWirePrice(squareBasket.wirePrice)
        setLaborPrice(squareBasket.laborPrice)
        setTotalWithoutProfit(squareBasket.totalWithoutProfit)
        setMaxPrice(squareBasket.maxPrice)
    }, [side1, side2, height])

    function maskNumber(n: number): string {
        return String(n.toFixed(2)).replace('.', ',')
    }

    return (
        <SafeAreaView>
            <ScrollView style={{ margin: 8 }}>
                <NumberInput onChangeNumber={setSide1} placeholder="Lado 1 (cm)" inputName="Lado 1" />
                <NumberInput onChangeNumber={setSide2} placeholder="Lado 2 (cm)" inputName="Lado 2" />
                <NumberInput onChangeNumber={setHeight} placeholder="Altura (cm)" inputName="Altura" />

                <View style={{ padding: 8 }}>
                    <View style={styles.containerShowNumber}>
                        <ShowNumber unit="cm²" name="Área da base">{maskNumber(baseArea)}</ShowNumber>
                        <ShowNumber unit="cm²" name="Área lateral">{maskNumber(sideArea)}</ShowNumber>
                        <ShowNumber unit="cm²" name="Área total">{maskNumber(totalArea)}</ShowNumber>
                        <ShowNumber type="weight" unit="Kg" name="Peso em fio">{maskNumber(wireWeight)}</ShowNumber>
                        <ShowNumber type="time" unit="h" name="Tempo estimado">{maskNumber(estimulatedTime)}</ShowNumber>
                        <ShowNumber type="time" unit="h" name="Tempo real">{maskNumber(realTime)}</ShowNumber>
                        <ShowNumber type="money" name="Preço em fio">R$ {maskNumber(wirePrice)}</ShowNumber>
                        <ShowNumber type="money" name="Preço mão de obra">R$ {maskNumber(laborPrice)}</ShowNumber>
                        <ShowNumber type="money" name="Preço sem lucro">R$ {maskNumber(totalWithoutProfit)}</ShowNumber>
                        <ShowNumber type="money" name="Preço máximo">R$ {maskNumber(maxPrice)}</ShowNumber>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default CalculatorSquareBasket