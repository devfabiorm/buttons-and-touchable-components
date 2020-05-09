import React from 'react';
import {
    TouchableHighlight,
    TouchableOpacity,
    TouchableWithoutFeedback,
    TouchableNativeFeedback,
    View,
    Text
} from 'react-native';

import styles from './styles';

export const Buttons = () => {

    return (
        <View style={styles.container}>
            <TouchableHighlight
                underlayColor='red'
                onPress={() => { }}
                style={{ borderRadius: 38 }}
            >
                <View style={{ backgroundColor: 'green', borderRadius: 38 }}>
                    <Text style={{ color: 'white', padding: 20, fontSize: 18, borderRadius: 38 }}>
                        TouchableHighlight
                    </Text>
                </View>
            </TouchableHighlight>
            <TouchableNativeFeedback
                useForeground={false}
                onPress={() => { }}>
                <View style={{
                    margin: 20,
                    width: 300,
                    height: 50,
                    backgroundColor: 'blue'
                }}>
                    <Text style={{
                        margin: 10,
                        fontSize: 20,
                        abscolor: 'white',
                        textAlign: 'center'
                    }}>TouchableNativeFeedback</Text>
                </View>
            </TouchableNativeFeedback>
            <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => { }}>
                <View style={{
                    margin: 20,
                    width: 200,
                    height: 50,
                    backgroundColor: 'red'
                }}>
                    <Text style={{
                        margin: 10,
                        fontSize: 20,
                        color: 'white',
                        textAlign: 'center'
                    }}>
                        TouchableOpacity
                    </Text>
                </View>
            </TouchableOpacity>
            <TouchableWithoutFeedback
            onPressIn={() => alert("PressIn")}
            onPressOut={() => alert("PressOut")}
            onLongPress={() => alert("longPress")}
            onPress={() => {}}>
                <View style={{
                    width: 300,
                    height: 50,
                    margin: 20,
                    backgroundColor: 'purple'
                }}>
                    <Text style={{
                        margin: 10,
                        fontSize: 20,
                        color: 'white',
                        textAlign: 'center'
                    }}>TouchableWithoutFeedback</Text>
                </View>
            </TouchableWithoutFeedback>
        </View>
    );
}