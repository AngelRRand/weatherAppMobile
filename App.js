import { Alert, View, StatusBar, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Formulario from './src/Formulario.js';
import Clima from './src/Clima.js'
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
  const [bgColor, setBgColor] = useState('#e0e0e0');

  const { ciudad, pais } = busqueda

  useEffect(() => {
    const consultarClima = async () => {

      if (consultar) {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${APIKEY}`
        try {
          const resp = await fetch(url)
          const resultado = await resp.json()
          setResultado(resultado)
          setConsultar(false)

          //Cambiar el color del fondo

          const kelvin = 273.15;
          const {main} = resultado;
          const actual = main.temp - kelvin;

          if(actual < 10){
            setBgColor('#85ddff')
          } else if(actual >= 10 && actual < 25){
            setBgColor('#ffe985')
          } else{
            setBgColor('#ff886b')
          }

          return;
        } catch (error) {
          mostrarAlerta()
        }
      }
      if (resultado.cod === '404') {
        mostrarAlerta()
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
  const bgApp = {
    backgroundColor: bgColor
  }
  return (

    <>
      <StatusBar />
      <TouchableWithoutFeedback onPress={() => ocultarTeclado()}>
        <View style={[styles.app, bgApp]}>
          <View style={styles.container}>
            <Clima
              resultado={resultado}
            />
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

