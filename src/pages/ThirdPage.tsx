import { View, StyleSheet, Text, Button } from 'react-native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ParamListBase } from '@react-navigation/native';

type ThirdPageProps = {
    navigation: NativeStackNavigationProp<ParamListBase, 'ThirdPage'>;
}

export const ThirdPage = ({ navigation }: ThirdPageProps) => {
    return (
        <View style={styles.page}>
            <Button
                title="FirstPage"
                onPress={() => navigation.navigate('FirstPage')}
            />
            <Button
                title="SecondPage"
                onPress={() => navigation.navigate('SecondPage')}
            />
            <Text>Third page</Text>
            <Button
                title="FourthPage"
                onPress={() => navigation.navigate('FourthPage')}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    page: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 25,
    }
})