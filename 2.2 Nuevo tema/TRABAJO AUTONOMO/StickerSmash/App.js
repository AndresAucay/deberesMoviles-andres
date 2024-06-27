import React from 'react';
import { View, StatusBar, StyleSheet } from 'react-native';
import ImageViewer from './components/ImageViewer';
import Button from './components/Button';
import PlaceholderImage from './assets/placeholder.png';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer placeholderImageSource={PlaceholderImage} />
      </View>
      <View style={styles.footerContainer}>
        <Button theme="primary" label="Choose a photo" />
        <Button label="Use this photo" />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  footerContainer: {
    padding: 20,
  },
});
