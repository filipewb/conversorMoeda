import React from 'react';

import RNPickerSelect from 'react-native-picker-select';

export default function Picker(props) {

    const placeholder = {
        label: 'Seleciona uma moeda...',
        value: null,
        color: '#101215'
    }

    return (
        <RNPickerSelect
            placeholder={placeholder}
            onValueChange={(valor) => props.onChange(valor)}
            items={props.moedas}
            style={{
                inputIOS: {
                    fontSize: 20,
                    color: '#000',
                },
                inputAndroid: {
                    fontSize: 20,
                    color: '#000',
                },
            }}
        />
    );
};