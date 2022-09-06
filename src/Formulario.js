import { View, Text, TextInput, TouchableWithoutFeedback, Animated, Alert } from 'react-native';
import React, {useState} from 'react';
import styles from '../styles/Formulario.jsx';
import { Picker } from '@react-native-picker/picker'
const Formulario = ({busqueda, setbusqueda, setConsultar}) => {

    const {pais, ciudad} = busqueda

    const consultarClima = () =>{
        if(pais.trim() === '' || ciudad.trim() === ''){
            mostrarAlerta()
            return;
        }

        setConsultar(true)
    }
    const mostrarAlerta = () =>{
        Alert.alert(
            'Error',
            'Agrega una ciudad y un pais para la busqueda', [
                {
                    text: 'Entendido'
                }
            ]
        )
    }
    const [animation] = useState(new Animated.Value(1))
    const animationEntrada = ()=>{
        Animated.spring(animation, {
            toValue: 0.98,
            useNativeDriver: true
        }).start();
    }
    const animationSalida = ()=>{
        Animated.spring(animation, {
            toValue: 1,
            friction:3,
            tension:30,
            useNativeDriver: true
        }).start();
    }
    const styleAnimation ={
        transform: [{scale:animation}]
    }
    return (
        <>
            <View style={styles.form}>
                <View>
                    <TextInput
                        value={ciudad}
                        style={styles.input}
                        placeholder='Ciudad'
                        onChangeText={ciudad => setbusqueda({...busqueda, ciudad})}
                    />
                </View>
                <View style={{ width: '100%', }}>
                    <Picker
                        selectedValue={pais}
                        onValueChange={pais => setbusqueda({...busqueda, pais})}
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
                    onPress={()=> consultarClima()}
                >

                    <Animated.View style={[styles.btn, styleAnimation]}>
                        <Text style={styles.btnText}>Buscar Clima</Text>
                    </Animated.View>

                </TouchableWithoutFeedback>
            </View>

        </>
    )
}

export default Formulario