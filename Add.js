// Note: I have to use SafeAreaView ensures my app's content stays visible and never gets hidden behind notches,
// status bars, or curved screen edges. (There time where my app I cant press the button cause it
// overlap with the front camera etc with the help of SafeAreaView i able to click on the button.)

import React, { useState } from 'react';
import {
    Text,
    TextInput,
    Button,
    StyleSheet,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import RNPickerSelect from 'react-native-picker-select';
import { datasource } from './Data.js';

const Add = ({ navigation }) => {
    const [letter, setLetter] = useState('');
    const [type, setType] = useState('Vowels');

    return (
        <SafeAreaView style={styles.container}>
            <Text>Letter:</Text>
            <TextInput
                style={styles.input}
                maxLength={1}
                value={letter}
                onChangeText={setLetter}
            />

            <Text>Letter type:</Text>
            <RNPickerSelect
                value={type}
                onValueChange={(value) => setType(value)}
                items={[
                    { label: 'Vowels', value: 'Vowels' },
                    { label: 'Consonants', value: 'Consonants' },
                ]}
            />

            <Button
                title="Submit"
                onPress={() => {
                    if (!letter) {
                        alert('Please enter a letter');
                        return;
                    }
                    let item = { key: letter };
                    let indexnum = type === 'Vowels' ? 0 : 1;
                    datasource[indexnum].data.push(item);
                    navigation.navigate('Home');
                }}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: "#fff"
    },
    input: {
        borderWidth: 1,
        borderColor: '#999',
        paddingHorizontal: 8,
        paddingVertical: 4,
        marginBottom: 12,
    },
});

export default Add;



