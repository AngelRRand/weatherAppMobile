import { View, Text, TextInput } from 'react-native';
import React from 'react';
import styles from '../styles/Formulario.jsx';
import { Picker } from '@react-native-picker/picker'
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
    <View style={{ width: '100%', }}>
        <Picker>
            <Picker.Item label='--Seleccione un pais--' value=''/>
            <Picker.Item label='Estados Unidos' value='US'/>
            <Picker.Item label='Mexico' value='MX'/>
            <Picker.Item label='Argentina' value='AR'/>
            <Picker.Item label='Colombia' value='CO'/>
            <Picker.Item label='Costa Rica' value='CR'/>
            <Picker.Item label='España' value='ES'/>
            <Picker.Item label='Peru' value='PE'/>
        </Picker>
    </View>
    
    </>
  )
}

export default Formulario