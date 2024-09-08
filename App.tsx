import React from 'react';
import { NavigationContainer, DarkTheme, DefaultTheme } from '@react-navigation/native';
import { useColorScheme } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FirstPage } from './src/pages/FirstPage';
import { SecondPage } from './src/pages/SecondPage';
import { ThirdPage } from './src/pages/ThirdPage';
import { FourthPage } from './src/pages/FourthPage';
import { ContactPage } from './src/pages/ContactPage'; // Импортируйте другие экраны
import { StackParamList } from './types'; // Импортируйте типы

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator<StackParamList>();

function MainStack() {
    return (
        <Stack.Navigator initialRouteName="FirstPage">
            <Stack.Screen name="FirstPage" component={FirstPage} />
            <Stack.Screen name="ContactPage" component={ContactPage} />
        </Stack.Navigator>
    );
}

export default function App() {
    const scheme = useColorScheme();

    return (
        <NavigationContainer theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
            <Tab.Navigator>
                <Tab.Screen name="Home" component={MainStack} />
                <Tab.Screen name="SecondPage" component={SecondPage} />
                <Tab.Screen name="ThirdPage" component={ThirdPage} />
                <Tab.Screen name="FourthPage" component={FourthPage} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}