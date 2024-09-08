import { useEffect, useState } from 'react';
import { View, StyleSheet, Text, SafeAreaView, FlatList, TouchableOpacity } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ParamListBase } from '@react-navigation/native';
import { Contact } from '../components/Contact';

const url: string = 'https://jsonplaceholder.typicode.com/users';

async function fetchUsers(url: string) {
    const response = await fetch(url);
    return response.json();
}

type FirstPageProps = {
    navigation: NativeStackNavigationProp<ParamListBase, 'FirstPage'>;
};

type ContactItem = {
    id: string;
    name: string;
    username: string;
    email: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo: {
            lat: string;
            lng: string;
        };
    };
    phone: string;
    website: string;
    company: {
        name: string;
        catchPhrase: string;
        bs: string;
    };
};

export const FirstPage = ({ navigation }: FirstPageProps) => {
    const [contacts, setContacts] = useState<ContactItem[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const getUsers = async () => {
            try {
                const data = await fetchUsers(url);
                setContacts(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        };
        getUsers();
    }, []);

    if (loading) {
        return <Text>Loading...</Text>;
    }

    const handlePress = (item: ContactItem) => {
        navigation.navigate('ContactPage', { contact: item });
    };

    return (
        <View style={styles.page}>
            <SafeAreaView style={styles.container}>
                <FlatList
                    style={styles.flatList}
                    data={contacts}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => handlePress(item)}>
                            <Contact id={item.id} name={item.name} phone={item.phone} email={item.email} />
                        </TouchableOpacity>
                    )}
                />
            </SafeAreaView>
        </View>
    );
};

const styles = StyleSheet.create({
    page: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 24,
    },
    container: {
        flex: 1,
        width: '100%',
    },
    flatList: {
        width: '100%',
        backgroundColor: '#222',
        padding: 24,
    },
});