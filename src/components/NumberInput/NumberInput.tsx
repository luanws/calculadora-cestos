import React from 'react'
import { TextInput, View, Text } from 'react-native'

import styles from './styles'

interface Props {
    placeholder?: string,
    inputName: string
}

const NumberInput: React.FC<Props> = (props) => {
    return (
        <View style={styles.container}>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'flex-start',
                zIndex: 1
            }}>
                <View style={styles.containerText}>
                    <Text style={styles.text}>{props.inputName}</Text>
                </View>
            </View>
            <TextInput
                style={styles.textInput}
                placeholder={props.placeholder ? props.placeholder : props.inputName}
                keyboardType="numeric"
            />
        </View>
    )
}

export default NumberInput