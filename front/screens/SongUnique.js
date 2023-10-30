import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const songsData = [
  { id: 1, name: 'Canción 1', chords: 'Am - F - C - G', lyrics: 'Am   F     C   G\nñlsd,ñld,fñl,sñlf,ñdl,fñl,fñl,dsñl,f' },
  // Agregar más canciones aquí
];

const SongListScreen = () => {
  return (
    <View style={styles.container}>
      {songsData.map(song => (
        <View key={song.id} style={styles.songContainer}>
          <Text style={styles.songName}>{song.name}</Text>
          <View style={styles.lyricsContainer}>
            <Text style={styles.chordsText}>{song.chords}</Text>
            <Text style={styles.lyricsText}>{song.lyrics}</Text>
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  songContainer: {
    marginBottom: 20,
  },
  songName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  lyricsContainer: {
    position: 'relative',
    marginTop: 10,
  },
  chordsText: {
    position: 'absolute',
    top: 0,
    left: 0,
    fontSize: 16,
    fontWeight: 'bold',
  },
  lyricsText: {
    marginLeft: 50, // Ajusta el valor según sea necesario
    fontSize: 16,
  },
});

export default SongListScreen;
