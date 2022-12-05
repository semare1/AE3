import React from 'react';
import {useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { HelperText, TextInput} from 'react-native-paper';

export const EntradaDEmail = () => {
    const [text, setText] = useState('');
    // const [checked, setChecked] = useState(false);

    const hasErrors = () => {
        const expReg = /^[a-zA-Z]+\@[a-zA-Z\_\-0-9]+\.[a-z]{2,5}$/;
        return( expReg.test(text) ? "":"El Email introduit no es valid!");
    };

    return (
        <View>
            <TextInput label="Email"
                value={text}
                keyboardType="email-address"
                right={<TextInput.Icon icon="check" />}
                onChangeText={text => setText(text)}/>
            <HelperText type="error" visible={hasErrors()}>
                El Email introduit no es valid!
            </HelperText>
        </View>
    );
}

const styles = StyleSheet.create({
    estilDeCheck: {
        color: 'green',
    },
});