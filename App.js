import { Text, View, StatusBar, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Formulario from './src/Formulario';
import styles from './styles/App.jsx';
import APIKEY from './api';
import { useState, useEffect } from 'react';
export default function App() {

  console.log(APIKEY)
  const [busqueda, setbusqueda ] = useState({
    ciudad: '',
    pais:''
  });
  const [consultar, setConsultar] = useState(false);
  const {ciudad, pais} = busqueda
  useEffect(() => {
    if(consultar){
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${APIKEY}`
    }
  }, [consultar]);
  const ocultarTeclado = () =>{
    Keyboard.dismiss();
  }
  return (
    
    <>
      <StatusBar />
      <TouchableWithoutFeedback onPress={()=>ocultarTeclado()}>
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

