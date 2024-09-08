import { View, StyleSheet, Text, Button } from 'react-native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ParamListBase } from '@react-navigation/native';

type ProfileProps = {
    navigation: NativeStackNavigationProp<ParamListBase, 'Profile'>;
}

export const Profile = ({ navigation }: ProfileProps ) => {
    return (
        <View style={styles.page}>
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


