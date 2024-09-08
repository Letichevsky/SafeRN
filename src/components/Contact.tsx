import { Text, View, StyleSheet } from "react-native"

interface ContactProps {
    id: string,
    name: string,
    phone: string,
    email: string
}

export const Contact: React.FC<ContactProps> = ({ id, name, phone, email }) => {
    return (
        <View style={styles.Contact}>
            <Text style={styles.Title}>Person {id}</Text>
            <Text style={styles.Text}>{name}</Text>
            <Text style={styles.Text}>{phone}</Text>
            <Text style={styles.Text}>{email}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    Contact: {
        height: 'auto',
        padding: 24,
        backgroundColor: '#333',
        borderRadius: 24,
        gap: 6,
        marginBottom: 24,
    },
    Title: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold'
    },
    Text: {
        color: '#fff',
        fontSize: 16,

    }
})
