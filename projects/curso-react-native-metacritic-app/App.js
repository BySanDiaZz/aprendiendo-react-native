import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Pressable, Image } from 'react-native';
import { getLatestGames } from './lib/metacritic';

export default function App() {

  const [games, setGames] = useState([]);

  useEffect(() => {
    getLatestGames().then(games => {
      setGames(games);
    });
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      {
        games.map(game => {
          <View key={game.slug} style={styles.card}>
            <Image
             source={{ uri: game.image }}
             style={{
              width: 107,
              height: 147,
              borderRadius: 10,
             }}
             >

             </Image>
          </View>
        })
      }

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
