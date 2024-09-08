import { View, StyleSheet, Text, Button } from 'react-native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ParamListBase } from '@react-navigation/native';

type SecondPageProps = {
    navigation: NativeStackNavigationProp<ParamListBase, 'SecondPage'>;
}

export const SecondPage = ({ navigation }: SecondPageProps) => {
    return (
        <View style={styles.page}>
            <Button
                title="FirstPage"
                onPress={() => navigation.navigate('FirstPage')}
            />
            <Text>SecondPage</Text>
            <Button
                title="ThirdPage"
                onPress={() => navigation.navigate('ThirdPage')}
            />
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