// ContactPage.tsx
import React from 'react';
import { Text, View, ScrollView, StyleSheet } from 'react-native';
import { StackParamList } from '../../types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type ContactPageProps = NativeStackScreenProps<StackParamList, 'ContactPage'>;

export const ContactPage: React.FC<ContactPageProps> = ({ route }) => {
    const { contact } = route.params; // Получаем данные контакта

    return (
        <ScrollView style={{backgroundColor: '#222'}} >
            <View style={styles.container}>
                <Text style={styles.Title}>Person {contact.id}</Text>
                <Text style={styles.Text}>Name: {contact.name}</Text>
                <Text style={styles.Text}>Username: {contact.username}</Text>
                <Text style={styles.Text}>Email: {contact.email}</Text>
                <Text style={styles.Text}>Phone: {contact.phone}</Text>
                <Text style={styles.Text}>Website: {contact.website}</Text>
                <Text style={styles.Text}>Address: {`${contact.address.street}, ${contact.address.suite}, ${contact.address.city}, ${contact.address.zipcode}`}</Text>
                <Text style={styles.Text}>Geo: {`Lat: ${contact.address.geo.lat}, Lng: ${contact.address.geo.lng}`}</Text>
                <Text style={styles.Text}>Company Name: {contact.company.name}</Text>
                <Text style={styles.Text}>CatchPhrase: {contact.company.catchPhrase}</Text>
                <Text style={styles.Text}>Business: {contact.company.bs}</Text>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    Text: {
        color: '#fff',
        fontSize: 16,
    },
    Title: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold'
    },
    container: {
        padding: 24,
        backgroundColor: '#222',
    }
})