import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { Platform } from 'react-native';
import { useTheme } from 'styled-components';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from '../screens/Home';
import { RegisterScreen } from '../screens/RegisterScreen';
import { ChartScreen } from '../screens/ChartScreen/ChartScreen';

const { Navigator, Screen } = createBottomTabNavigator();

export function AppRoutes(){
    const theme = useTheme();

    return (
        <Navigator screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: theme.COLORS.PRIMARY,
            tabBarInactiveTintColor: theme.COLORS.DISABLED,
            tabBarLabelPosition: 'beside-icon',
            tabBarStyle: {
               height: 68,
               paddingVertical: Platform.OS === 'ios' ? 20 : 0,
            }
        }}>
            <Screen 
                name="Transações" 
                component={Home}
                options={{
                    tabBarIcon: (({size, color}) => 
                        <MaterialIcons 
                            name="swap-horiz"
                            size={size}
                            color={color}
                        />)
                }} 
            />

            <Screen 
                name="Cadastrar" 
                component={RegisterScreen}
                options={{
                    tabBarIcon: (({size, color}) => 
                        <MaterialIcons 
                            name="library-add"
                            size={size}
                            color={color}
                        />)
                }} 
            />
            
            <Screen 
                name="Relatórios" 
                component={ChartScreen}
                options={{
                    tabBarIcon: (({size, color}) => 
                        <MaterialIcons 
                            name="bar-chart"
                            size={size}
                            color={color}
                        />)
                }} 
            />
        </Navigator>
    )
}