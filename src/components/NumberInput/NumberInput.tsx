import React from 'react'
import { TextInput, View, Text } from 'react-native'

import styles from './styles'

interface Props {
    placeholder?: string,
    inputName: string,
    value?: string,
    onChangeNumber?: (n: number) => void
}

const NumberInput: React.FC<Props> = (props) => {
    function stringToNumber(text: string): number {
        text = text.replace(',', '.')
        return Number(text)
    }

    return (
        <View>
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
                value={props.value}
                onChangeText={text => { if (props.onChangeNumber) props.onChangeNumber(stringToNumber(text)) }}
            />
        </View>
    )
}

export default NumberInput