import { View, Text, TextInput, TouchableWithoutFeedback, Animated } from 'react-native';
import React, {useState} from 'react';
import styles from '../styles/Formulario.jsx';
import { Picker } from '@react-native-picker/picker'
const Formulario = () => {

    const [animation] = useState(new Animated.Value(1))
    const animationEntrada = ()=>{

    }
    const animationSalida = ()=>{
        
    }
    return (
        <>
            <View style={styles.form}>
                <View>
                    <TextInput
                        style={styles.input}
                        placeholder='Ciudad'
                    />
                </View>
                <View style={{ width: '100%', }}>
                    <Picker
                        itemStyle={{height:120, backgroundColor:'#fff'}}
                    >
                        <Picker.Item label='--Seleccione un pais--' value='' />
                        <Picker.Item label='Estados Unidos' value='US' />
                        <Picker.Item label='Mexico' value='MX' />
                        <Picker.Item label='Argentina' value='AR' />
                        <Picker.Item label='Colombia' value='CO' />
                        <Picker.Item label='Costa Rica' value='CR' />
                        <Picker.Item label='España' value='ES' />
                        <Picker.Item label='Peru' value='PE' />
                    </Picker>
                </View>
                <TouchableWithoutFeedback
                    onPressIn={()=> animationEntrada()}
                    onPressOut={()=> animationSalida()}
                >

                    <View style={styles.btn}>
                        <Text style={styles.btnText}>Buscar Clima</Text>
                    </View>

                </TouchableWithoutFeedback>
            </View>

        </>
    )
}

export default Formulario