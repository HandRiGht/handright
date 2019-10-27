import * as WebBrowser from 'expo-web-browser';
import React, {Component} from 'react';
import {
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Picker,
    Button,
} from 'react-native';

import { MonoText } from '../components/StyledText';

export default class HomeScreen extends Component  {

    constructor(props) {
        super (props);

        this.state = {
            language: ''
        }
    }
    render() {
        return (
            <View style={styles.getStartedContainer}>
                <Text> You have selected: {this.state.profession}</Text>
                <Picker style={styles.getLanguagePicker}
                        selectedValue={this.state.profession}
                        style={{height: 50, width: 200}}
                        onValueChange={(itemValue, itemIndex) =>
                            this.setState({profession: itemValue})
                        }>
                    <Picker.Item label="General" value="General"/>
                    <Picker.Item label="Healthcare professional" value="Healthcare professional"/>
                    <Picker.Item label="Engineer/Technologist" value="Engineer/Technologist"/>
                    <Picker.Item label="Lawyer" value="Lawyer"/>
                    <Picker.Item label="Business" value="Business"/>
                    <Picker.Item label="Scientist" value="Scientist"/>
                </Picker>
            </View>
        );
    }
}

const styles = StyleSheet.create({

    getStartedContainer: {
        alignItems: 'center',
        marginHorizontal: 50,
        marginTop: 25,
        flex: 1,
    },
}
);