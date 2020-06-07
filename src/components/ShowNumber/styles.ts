import React from 'react'
import { StyleSheet } from 'react-native'

import colors from '../../res/colors'

const styles = StyleSheet.create({
    containerName: {
        marginBottom: -10,
        zIndex: 1,
        marginLeft: 8,
        paddingHorizontal: 8,
        borderRadius: 3,
        flexDirection: 'row',
    },
    textName: {
        color: 'white',
        textAlignVertical: 'center'
    },
    containerValue: {
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
    icon: {
        marginRight: 8,
        marginVertical: 4
    },
    noneType: {
        backgroundColor: colors.primaryDark,
    },
    moneyType: {
        backgroundColor: colors.successDark
    },
    timeType: {
        backgroundColor: colors.dangerDark
    },
    weightType: {
        backgroundColor: colors.warningDark
    },
})

export default styles