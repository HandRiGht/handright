import React, { Component } from 'react'
import {
    StyleSheet,
    TouchableOpacity,
    Text,
    View,
} from 'react-native'

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 }
    }

    /*onPress = () => {
        this.setState({
            count: this.state.count+1
        })*/

    render()
    {
        return(
            <View style={styles.container}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={this.onPress}
                >
                    <Text> Word </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={this.onPress}
                >
                    <Text> Sentence </Text>
                </TouchableOpacity>
            </View>

        );
    }
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 200,
        paddingHorizontal: 50,
        marginTop: 50,
        marginHorizontal: 50
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 50,
        marginHorizontal: 20
    },
});