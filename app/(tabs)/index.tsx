import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';

const players = [
  { id: '1', nickname: 'ChessmanKir', role: 'Лидер', city: 'Вена' },
  { id: '2', nickname: 'DarkKnight', role: 'Штурмовик', city: 'Киев' },
  { id: '3', nickname: 'Fanatik', role: 'Снайпер', city: 'Алматы' },
  { id: '4', nickname: 'Raven', role: 'Саппорт', city: 'Минск' },
  { id: '5', nickname: 'Ghost', role: 'Универсал', city: 'Прага' },
];

export default function PlayersScreen() {
  return (
      <View style={styles.container}>
        <Text style={styles.title}>Игроки</Text>
        <Text style={styles.subtitle}>Найди тиммейта для катки</Text>

        <FlatList
            data={players}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.listContent}
            renderItem={({ item }) => (
                <Pressable style={styles.card}>
                  <View style={styles.avatar}>
                    <Text style={styles.avatarText}>
                      {item.nickname.charAt(0).toUpperCase()}
                    </Text>
                  </View>

                  <View style={styles.info}>
                    <Text style={styles.nickname}>{item.nickname}</Text>
                    <Text style={styles.meta}>{item.role}</Text>
                    <Text style={styles.city}>{item.city}</Text>
                  </View>
                </Pressable>
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
    paddingBottom: 24,
    gap: 12,
  },
  card: {
    backgroundColor: '#0f172a',
    borderWidth: 1,
    borderColor: '#1e293b',
    borderRadius: 18,
    padding: 14,
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 54,
    height: 54,
    borderRadius: 27,
    backgroundColor: '#38bdf8',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
  },
  avatarText: {
    color: '#0f172a',
    fontSize: 22,
    fontWeight: '700',
  },
  info: {
    flex: 1,
  },
  nickname: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '600',
  },
  meta: {
    color: '#38bdf8',
    marginTop: 4,
    fontSize: 14,
  },
  city: {
    color: '#94a3b8',
    marginTop: 4,
    fontSize: 13,
  },
});