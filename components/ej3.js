import React from 'react';
import { useState } from 'react';
import { HelperText, TextInput } from 'react-native-paper';

export const EntradaDeTelefon = () => {
    const [text, setText] = useState('');
    const expRegNacional = /^(\d{9})$/;
    const expRegInterna = /^[\+]?\d{2} \d{9}$/;

    const verifica = () => {
        if (text.length > 0) {
            return (expRegNacional.test(text) || expRegInterna.test(text)) && <TextInput.Icon icon="check" iconColor="green" />

        }
    }

    const verifica1 = () => {
        return (expRegNacional.test(text) ? ''
            : (expRegInterna.test(text) ? '' : 'El numero introduit no es valid!'));
    }

    const longitudTexto = () => {
        if (expRegNacional.test(text))
            return 9;
        else {
            if (expRegInterna.test(text))
                return 13;
            else
                return 25;
        }
    }

    return (
        <>
            <TextInput label="Numero de telefon"
                value={text}
                keyboardType="numeric"
                maxLength={longitudTexto()}
                right={verifica()}
                onChangeText={text => setText(text)} />
            <HelperText type="error" visible={verifica1()}>
                {text.length === 0 ? '' : 'El numero introduit no es valid!!'}
            </HelperText>
        </>
    );
}