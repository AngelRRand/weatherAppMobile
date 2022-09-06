import { View, Text, Image } from 'react-native'
import React from 'react'
import styles from '../styles/Clima.jsx'

const Clima = ({ resultado }) => {

  const { name, main } = resultado

  if (!name) return null

  const kelvin = 273.15
  return (
    <View style={styles.clima}>
      <Text style={[styles.text, styles.actual]}>{parseInt(main.temp - kelvin)}
        <Text style={styles.temperatura}>
          °C
        </Text>
        <Image
          style={{ width: 66, height: 58 }}
          source={{ uri: `https://openweathermap.org/img/w/${resultado.weather[0].icon}.png` }}
        />
      </Text>
      <View style={styles.temperaturas}>
        <Text style={styles.text}> Min {''}
          <Text style={styles.temperatura}>
            {parseInt(main.temp_min - kelvin)} °C
          </Text>
        </Text>
        <Text style={styles.temperatura}> Max {''}
          <Text style={styles.text}>
            {parseInt(main.temp_max - kelvin)} °C
          </Text>
        </Text>
      </View>
    </View>
  )
}

export default Clima