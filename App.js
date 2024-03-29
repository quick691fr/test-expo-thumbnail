import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as ExpoVideoThumbnails from "expo-video-thumbnails"
import { useEffect, useState } from 'react';

export default function App() {
  useEffect(() => {
    console.log("Calling Thumbnail creation")
    ExpoVideoThumbnails.getThumbnailAsync("http://zedfvbzenfzifnz.com/test.mp4", {
      quality: 0.8,
      time: 2000,
    })
      .then((thumbnailImage) => {
        console.log("Thumbnail of video created successfully", thumbnailImage.uri)
      })
      .catch((err) => {
        console.log("Unable to get thumbnail of video", err)
      })
  }, [])

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
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
