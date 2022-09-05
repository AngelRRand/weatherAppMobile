import { View, Text, TextInput } from 'react-native';
import React from 'react';
import styles from '../styles/Formulario.jsx';
const Formulario = () => {
  return (
    <>
    <View style={styles.form}>
        <View>
            <TextInput
                placeholder='ciudad'
            />
        </View>
      <Text>Formulario</Text>
    </View>
    <View>

    </View>
    
    </>
  )
}

export default Formulario