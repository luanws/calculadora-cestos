import React from 'react'
import { StyleSheet } from 'react-native'

import colors from '../../res/colors'

const styles = StyleSheet.create({
    containerName: {
        backgroundColor: colors.primary,
        marginBottom: -10,
        zIndex: 1,
        marginLeft: 8,
        paddingHorizontal: 8,
        borderRadius: 3
    },
    textName: {
        color: 'white'
    },
    containerValue: {
        backgroundColor: colors.primary,
        borderRadius: 5,
        paddingTop: 12,
        padding: 8,
        paddingHorizontal: 16,
        flexDirection: "row"
    },
    textValue: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold'
    },
    textUnit: {
        color: 'white',
        fontSize: 15,
        fontStyle: 'italic',
        textAlignVertical: 'bottom'
    },
})

export default styles