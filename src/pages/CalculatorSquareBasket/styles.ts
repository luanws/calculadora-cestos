import React from 'react'
import { StyleSheet } from 'react-native'

import colors from '../../res/colors'

const styles = StyleSheet.create({
    textInput: {
        backgroundColor: colors.background,
        borderColor: colors.primary,
        borderWidth: 2,
        borderRadius: 5,
        margin: 8,
        padding: 4,
        paddingHorizontal: 8,
    }
})

export default styles