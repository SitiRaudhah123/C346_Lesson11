// Note: I have to use SafeAreaView ensures my app's content stays visible and never gets hidden behind notches,
// status bars, or curved screen edges. (There time where my app I cant press the button cause it
// overlap with the front camera etc with the help of SafeAreaView i able to click on the button.)

import React from 'react';
import {
    StatusBar,
    Button,
    SectionList,
    StyleSheet,
    Text,
    TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { datasource } from './Data.js';

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 15,
        margin: 10,
        textAlign: 'left',
    },
    opacityStyle: {
        borderWidth: 1,
    },
    headerText: {
        fontSize: 20,
        margin: 10,
        textAlign: 'center',
        fontWeight: 'bold',
    },
});

const Home = ({ navigation }) => {
    const renderItem = ({ item, index, section }) => (
        <TouchableOpacity
            style={styles.opacityStyle}
            onPress={() =>
                navigation.navigate('Edit', {
                    index: index,
                    type: section.title,
                    key: item.key,
                })
            }
        >
            <Text style={styles.textStyle}>{item.key}</Text>
        </TouchableOpacity>
    );

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
            <StatusBar />
            <Button
                title="Add Letter"
                onPress={() => navigation.navigate('Add')}
            />
            <SectionList
                sections={datasource}
                renderItem={renderItem}
                keyExtractor={(item, index) => item.key + index}
                renderSectionHeader={({ section: { title, bgcolor } }) => (
                    <Text style={[styles.headerText, { backgroundColor: bgcolor }]}>
                        {title}
                    </Text>
                )}
            />
        </SafeAreaView>
    );
};

export default Home;




