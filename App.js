import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View className="bg-blue-500 flex-1 items-center justify-center">
      <Text>Change text from Github</Text>
      <StatusBar style="auto" />
    </View>
  );
}

