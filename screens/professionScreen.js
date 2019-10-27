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
            <View style={styles.container}>
                <View style={styles.getStartedContainer}>
                    <Text> You have selected: {this.state.profession}</Text>
                    <Picker style={styles.getLanguagePicker}
                            selectedValue={this.state.profession}
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
                <View style={styles.getButtonContainer}>
                    <TouchableOpacity onPress = {() => {this.props.navigation.navigate("Links", {'profession': this.state.profession})}}>
                        <View style = {styles.button_1}>
                        <Text style = {{color: 'white'}}>Okay</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    getStartedContainer: {
        alignItems: 'center',
        marginHorizontal: 50,
        marginTop: 25,
        flex: 1,
    },
    getLanguagePicker:{
        height: 50,
        width: 200,
    },
    getButtonContainer:{
        flexDirection: 'row',
        flex: 1,
        marginTop: 40,
        marginHorizontal: 50,
    },
    button_1: {
        backgroundColor: '#F7A119',
        justifyContent: 'center',
        alignItems: 'center',
        height: 45,
        width: 100,
        marginHorizontal: 20,
        borderRadius: 15,
        //position: 'absolute',
        bottom:-70,
    },
}
);