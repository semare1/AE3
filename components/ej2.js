import React from 'react';
import { useState } from 'react';
import { View } from 'react-native';
import { HelperText, TextInput } from 'react-native-paper';

export const EntradaDEmail = () => {
    const [text, setText] = useState('');

    const hasErrors = () => {
        const expReg = /^[a-zA-Z]+\@[a-zA-Z\_\-0-9]+\.[a-z]{2,5}$/;
        return (expReg.test(text) ? "" : "El Email introduit no es valid!");
    };

    const hasErrors1 = () => {
        const expReg = /^[a-zA-Z]+\@[a-zA-Z\_\-0-9]+\.[a-z]{2,5}$/;
        return (expReg.test(text) && <TextInput.Icon icon="check" iconColor="green" />);
    }

    return (
        <View>
            <TextInput label="Email"
                value={text}
                keyboardType="email-address"
                right={hasErrors1()}
                onChangeText={text => setText(text)} />
            <HelperText type="error" visible={hasErrors()}>
                {text.length === 0 ? '' : 'El Email introduit no es valid!'}
            </HelperText>
        </View>
    );
}
