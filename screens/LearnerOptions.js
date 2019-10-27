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
                    <Text style = {{color: 'white'}}> Word </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={this.onPress}
                >
                    <Text style = {{color: 'white'}}> Sentence </Text>
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
        justifyContent: 'center',
        backgroundColor: '#F7A119',
        borderRadius: 15,
        padding: 20,
        marginHorizontal: 20
    },
});