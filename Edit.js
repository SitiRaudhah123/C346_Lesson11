// Note: I have to use SafeAreaView ensures my app's content stays visible and never gets hidden behind notches,
// status bars, or curved screen edges. (There time where my app I cant press the button cause it
// overlap with the front camera etc with the help of SafeAreaView i able to click on the button.)

import React, { useState } from 'react';
import {
    Text,
    TextInput,
    Button,
    StyleSheet,
    View,
    Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { datasource } from './Data.js';

const Edit = ({ navigation, route }) => {
    const [letter, setLetter] = useState(route.params.key);
    const index = route.params.index;
    const type = route.params.type;

    let indexnum = type === 'Vowels' ? 0 : 1;

    return (
        <SafeAreaView style={styles.container}>
            <Text>Letter:</Text>
            <TextInput
                style={styles.input}
                maxLength={1}
                value={letter}
                onChangeText={setLetter}
            />

            <View style={{ flexDirection: "row", marginTop: 12 }}>
                <View style={{ flex: 1, marginRight: 4 }}>
                    <Button
                        title="Save"
                        onPress={() => {
                            datasource[indexnum].data[index].key = letter;
                            navigation.navigate('Home');
                        }}
                    />
                </View>
                <View style={{ flex: 1, marginLeft: 4 }}>
                    <Button
                        title="Delete"
                        color="red"
                        onPress={() => {
                            Alert.alert(
                                "Are you sure?",
                                "",
                                [
                                    {
                                        text: "Yes",
                                        onPress: () => {
                                            datasource[indexnum].data.splice(index, 1);
                                            navigation.navigate('Home');
                                        }
                                    },
                                    { text: "No" }
                                ]
                            );
                        }}
                    />
                </View>
            </View>
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

export default Edit;

