import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Home from './pages/Home/Home'

const AppStack = createStackNavigator()

const Routes = () => {
    return (
        <NavigationContainer>
            <AppStack.Navigator>
                <AppStack.Screen
                    name="Home"
                    component={Home}
                    options={{
                        title: "Início"
                    }}
                />
            </AppStack.Navigator>
        </NavigationContainer>
    )
}

export default Routes