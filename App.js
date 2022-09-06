import { Alert, View, StatusBar, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Formulario from './src/Formulario';
import styles from './styles/App.jsx';
import APIKEY from './api';
import { useState, useEffect } from 'react';
export default function App() {

  const [busqueda, setbusqueda] = useState({
    ciudad: '',
    pais: ''
  });
  const [consultar, setConsultar] = useState(false);
  const [resultado, setResultado] = useState({});
  console.log(resultado)
  const { ciudad, pais } = busqueda

  useEffect(() => {
    const consultarClima=async()=>{

      if (consultar) {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${APIKEY}`
        try {
          const resp = await fetch(url)
          const resultado = await resp.json()
          setResultado(resultado)
          setConsultar(false)
        } catch (error) {
          mostrarAlerta()
        }
      }
    }
    consultarClima()
  }, [consultar]);



  const mostrarAlerta = () => {
    Alert.alert(
      'Error',
      'La ciudad busqueda no existe', [
      {
        text: 'Ok'
      }
    ]
    )
  }
  const ocultarTeclado = () => {
    Keyboard.dismiss();
  }
  return (

    <>
      <StatusBar />
      <TouchableWithoutFeedback onPress={() => ocultarTeclado()}>
        <View style={styles.app}>
          <View style={styles.container}>
            <Formulario
              busqueda={busqueda}
              setbusqueda={setbusqueda}
              setConsultar={setConsultar}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </>
  );
}

