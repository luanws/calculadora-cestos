import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import colors from './res/colors'


import Home from './pages/Home/Home'
import CalculatorSquareBasket from './pages/CalculatorSquareBasket/CalculatorSquareBasket'
import CalculatorCircularBasket from './pages/CalculatorCircularBasket/CalculatorCircularBasket'

const Stack = createStackNavigator()

const Routes = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerTintColor: 'white',
                headerStyle: {
                    backgroundColor: colors.primary
                },
                cardStyle: {
                    backgroundColor: colors.background
                }
            }}>
                <Stack.Screen name="Home" component={Home} options={{ title: "Início" }} />
                <Stack.Screen name="CalculatorSquareBasket" component={CalculatorSquareBasket} options={{ title: "Cestos quadrados" }} />
                <Stack.Screen name="CalculatorCircularBasket" component={CalculatorCircularBasket} options={{ title: "Cestos circulares" }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Routes