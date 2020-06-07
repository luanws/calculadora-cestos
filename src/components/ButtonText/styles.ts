import React from 'react'
import { StyleSheet } from 'react-native'

import colors from '../../res/colors'

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.primary,
        borderColor: colors.primaryDark,
        borderRadius: 5,
        padding: 32,
        margin: 8,
        color: 'white',
        alignItems: 'center',
        borderWidth: 2,
    },
    textButton: {
        color: 'white',
        fontSize: 15
    }
})

export default styles