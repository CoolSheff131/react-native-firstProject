import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Alert, Image, Text, Button, View } from 'react-native';
import imgSrc from './assets/favicon.png';

export default function App() {
  const handleBtn = () => Alert.alert('aa', 'asd', [{ text: 'Da' }, { text: 'net' }]);
  return (
    <View style={styles.container}>
      <Text>CoolSheff asdff!</Text>
      <Button title={'FFFF'} color="red" onPress={handleBtn} />
      <Button title="SAS" color="red" onPress={handleBtn} />
      <Image source={imgSrc} style={{ width: 305, height: 159 }} />
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
