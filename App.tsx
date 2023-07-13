import { StatusBar } from 'expo-status-bar';
import {Image, StyleSheet, Text, View} from 'react-native';
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated'

export default function App() {
  return (
    <Animated.View
        key={'animate_expo'}
        entering={FadeIn.duration(4000)}
        exiting={FadeOut.duration(4000)}
        style={styles.container}>
      <Image
          source={require('./assets/expo.png')}
          style={{ width: 100, height: 100 }}
          />
      <Text>First react-native app created with npx expo!</Text>
      <StatusBar style="auto" />
    </Animated.View>
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
