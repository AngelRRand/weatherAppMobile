import { Text, View, StatusBar, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Formulario from './src/Formulario';
import styles from './styles/App.jsx';
export default function App() {
  const ocultarTeclado = () =>{
    Keyboard.dismiss();
  }
  return (
    
    <>
      <StatusBar />
      <TouchableWithoutFeedback onPress={()=>ocultarTeclado()}>
      <View style={styles.app}>
          <View style={styles.container}>
            <Formulario />
          </View>
      </View>
      </TouchableWithoutFeedback>
    </>
  );
}

