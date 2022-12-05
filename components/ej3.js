import React from 'react';
import { useState } from 'react';
import { View } from 'react-native';
import { HelperText, TextInput } from 'react-native-paper';

export const EntradaDeTelefon = () => {
    const [text, setText] = useState('');
    

    const hasErrorsNacional = () => {
        const expRegNacional = /^(\d{9})$/;
        //maxLength=9;
        return (expRegNacional.test(text) ? "" : "El numero introduit no es valid!");
    };


    const hasErrorsInterna = () => {
        const expRegInterna = /^[\+]?(\d{2})?[\s]?(\d{9})?$/;
        //const expRegInterna = /^[\+]?(\d{2})?(\d{9})?$/;
        //maxLength=13;
            return (expRegInterna.test(text) ? "" : "El numero introduit no es valid!");
    }

    const hasErrors = () => {
        return(hasErrorsNacional()||hasErrorsInterna()?"": "El numero introduit no es valid!");
    }

    // const hasErrors1 = () =>{
    //     return (hasErrors()) ? <TextInput.Icon icon="check" iconColor = "green" /> : <TextInput.Icon icon="" />); 
    // }

    return (
        <View>
            <TextInput label="Numero de telefon"
                value={text}
                keyboardType="numeric"
                right={hasErrors1()}
                //maxLength={13}
                onChangeText={text => setText(text)} />
            <HelperText type="error" visible={hasErrorsInterna()}>
                El Numero introduit no es valid!
            </HelperText>
        </View>
    );
}
