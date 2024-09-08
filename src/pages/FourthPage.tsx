import { View, StyleSheet, Text, Button } from 'react-native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ParamListBase } from '@react-navigation/native';

type FourthPageProps = {
    navigation: NativeStackNavigationProp<ParamListBase, 'FourthPage'>;
}

export const FourthPage = ({ navigation }: FourthPageProps) => {
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
            <Button
                title="ThirdPage"
                onPress={() => navigation.navigate('ThirdPage')}
            />
            <Text>Fourth page</Text>
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