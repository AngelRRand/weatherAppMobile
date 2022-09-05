import { Text, View, StatusBar, ScrollView } from 'react-native';
import Formulario from './src/Formulario';
export default function App() {
  return (
    <ScrollView >
      <View>

      <StatusBar />
      <Formulario/>

      </View>
    </ScrollView>
  );
}

