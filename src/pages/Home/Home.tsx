import React from 'react'
import { View, Text, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native'
import ButtonText from '../../components/ButtonText/ButtonText'

import styles from './styles'

const Home = () => {
    return (
        <SafeAreaView>
            <ScrollView>
                <View>
                    <ButtonText onPress={() => { }}>Cestos quadrados</ButtonText>
                    <ButtonText onPress={() => { }}>Cestos circulares</ButtonText>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home