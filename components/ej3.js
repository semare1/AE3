import React from 'react';
import { useState } from 'react';
import { View } from 'react-native';
import { HelperText, TextInput } from 'react-native-paper';

export const EntradaDeTelefon = () => {
    const [text, setText] = useState('');
    const [limit, setLimit] = useState(0);
    const expRegNacional = /^(\d{9})$/;
    const expRegInterna = /^[\+]?(\d{2})?[\s]?(\d{9})?$/;

    // const hasErrorsNacional = () => {
    //     const expRegNacional = /^(\d{9})$/;
    //     //maxLength=9;
    //     return (expRegNacional.test(text) ? "" : "El numero introduit no es valid!");
    // };


    // const hasErrorsInterna = () => {
    //     const expRegInterna = /^[\+]?(\d{2})?[\s]?(\d{9})?$/;
    //     //const expRegInterna = /^[\+]?(\d{2})?(\d{9})?$/;
    //     //maxLength=13;
    //     return (expRegInterna.test(text) ? "" : "El numero introduit no es valid!");
    // }

    // const hasErrorsNacionalCompo = () => {
    //     const expRegNacional = /^(\d{9})$/;
    //     return (expRegNacional.test(text) ? <TextInput.Icon icon="check" iconColor="green" /> : <TextInput.Icon icon="" />);
    // }

    // const hasErrorsInternaCompo = () => {
    //     const expRegInterna = /^[\+]?(\d{2})?[\s]?(\d{9})?$/;
    //     return (expRegInterna.test(text) ? <TextInput.Icon icon="check" iconColor="green" /> : <TextInput.Icon icon="" />);
    // }

    const verifica = () => {
        return (expRegNacional.test(text) ? <TextInput.Icon icon="check" iconColor="green" />
            : (expRegInterna.test(text) ? <TextInput.Icon icon="check" iconColor="green" /> :<TextInput.Icon icon="" />));
    }

    const verifica1 = () => {
        return (expRegNacional.test(text) ? ''
            : (expRegInterna.test(text) ? '' : 'El numero introduit no es valid!'));
    }



    return (
        <View>
            <TextInput label="Numero de telefon"
                value={text}
                keyboardType="numeric"
                right={verifica()}
                onChangeText={text => setText(text)} />
            <HelperText type="error" visible={verifica1()}>
                El Numero introduit no es valid!
            </HelperText>
        </View>
    );
}
