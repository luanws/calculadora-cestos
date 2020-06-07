import React from 'react'
import { TouchableOpacity, Text } from 'react-native'

import styles from './styles'

interface Props {
    onPress: () => void
}

const ButtonText: React.FC<Props> = (props) => {

    return (
        <TouchableOpacity
            onPress={() => props.onPress()}
            activeOpacity={0.8}
            style={styles.button}
        >
            <Text style={styles.textButton}>{props.children}</Text>
        </TouchableOpacity >
    )
}

export default ButtonText