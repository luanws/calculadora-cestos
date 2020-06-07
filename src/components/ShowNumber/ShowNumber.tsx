import React from 'react'
import { View, Text, StyleProp, ViewStyle } from 'react-native'

import styles from './styles'

interface Props {
    top?: boolean
    name: string
    unit?: string
    type?: 'none' | 'money' | 'time' | 'weight'
}

const ShowNumber: React.FC<Props> = (props) => {
    const styleType = getStyleType()

    function getStyleType() {
        switch (props.type) {
            case 'money':
                return styles.moneyType
            case 'time':
                return styles.timeType
            case 'weight':
                return styles.weightType
            default:
                return styles.noneType
        }
    }

    return (
        <View style={{ marginTop: props.top ? undefined : 8 }}>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'flex-start',
                zIndex: 1
            }}>
                <View style={[styles.containerName, styleType]}>
                    <Text style={styles.textName}>{props.name}</Text>
                </View>
            </View>
            <View style={[styles.containerValue, styleType]}>
                <Text style={styles.textValue}>{props.children}</Text>
                <Text style={styles.textUnit}> {props.unit}</Text>
            </View>
        </View>
    )
}

export default ShowNumber