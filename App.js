import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View className="bg-green-400 flex-1 items-center justify-center">
      <Text className="text-xl">Second commit!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

