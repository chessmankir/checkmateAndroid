import { FlatList, StyleSheet, Text, View } from 'react-native';

const clans = [
    { id: '1', name: 'Checkmate', members: 42, status: 'Активный' },
    { id: '2', name: 'NightRaid', members: 31, status: 'Набор открыт' },
    { id: '3', name: 'Phoenix', members: 27, status: 'Активный' },
];

export default function ClansScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Кланы</Text>
            <Text style={styles.subtitle}>Список игровых сообществ</Text>

            <FlatList
                data={clans}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.listContent}
                renderItem={({ item }) => (
                    <View style={styles.card}>
                        <Text style={styles.name}>{item.name}</Text>
                        <Text style={styles.meta}>Участников: {item.members}</Text>
                        <Text style={styles.status}>{item.status}</Text>
                    </View>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#020617',
        paddingHorizontal: 16,
        paddingTop: 20,
    },
    title: {
        fontSize: 28,
        fontWeight: '700',
        color: '#ffffff',
    },
    subtitle: {
        fontSize: 14,
        color: '#94a3b8',
        marginTop: 6,
        marginBottom: 18,
    },
    listContent: {
        gap: 12,
        paddingBottom: 24,
    },
    card: {
        backgroundColor: '#0f172a',
        borderWidth: 1,
        borderColor: '#1e293b',
        borderRadius: 18,
        padding: 16,
    },
    name: {
        color: '#ffffff',
        fontSize: 18,
        fontWeight: '600',
    },
    meta: {
        color: '#94a3b8',
        marginTop: 6,
    },
    status: {
        color: '#38bdf8',
        marginTop: 6,
        fontWeight: '600',
    },
});