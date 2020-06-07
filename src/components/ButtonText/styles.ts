import React from 'react'
import { StyleSheet } from 'react-native'

import colors from '../../res/colors'

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.transparent,
        borderRadius: 5,
        padding: 8,
        margin: 8,
        color: 'white',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: colors.primary,
    },
    textButton: {
        color: colors.primary
    }
})

export default styles