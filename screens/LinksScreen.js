import Expo from 'expo';
import * as ExpoPixi from 'expo-pixi';
import React, { Component } from 'react';
import { Image, Platform, AppState, StyleSheet, Text, View } from 'react-native';
import { Card, CardItem, Button, Body} from 'native-base';
import axios from 'axios'
import * as FileSystem from 'expo-file-system';
import { Base64 } from 'js-base64';
import randomWords from 'random-words';
import Modal from "react-native-modal";

const isAndroid = Platform.OS === 'android';
function uuidv4() {
  //https://stackoverflow.com/a/2117523/4047926
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = (Math.random() * 16) | 0,
      v = c == 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

export default class App extends Component {
  state = {
    image: null,
    strokeColor: 0x0000ff,
    strokeWidth: 5,
    alpha: 0.5,
    appState: AppState.currentState,
    word: null,
    isModalVisible: false
  };

  handleAppStateChangeAsync = nextAppState => {
    if (this.state.appState.match(/inactive|background/) && nextAppState === 'active') {
      if (isAndroid && this.sketch) {
        this.setState({ appState: nextAppState, id: uuidv4(), lines: this.sketch.lines });
        return;
      }
    }
    this.setState({ appState: nextAppState });
  };

  componentDidMount() {
    AppState.addEventListener('change', this.handleAppStateChangeAsync);
    this.setState({word: randomWords()})
  }

  componentWillUnmount() {
    AppState.removeEventListener('change', this.handleAppStateChangeAsync);
  }
  
  toggleModal = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible });
  };

  onClickAsync = async () => {
      // const options = {
      //   format: 'png', /// PNG because the view has a clear background
      //   quality: 0.1, 
      //   result: 'base64',
      // };
    
    const { uri } = await this.sketch.takeSnapshotAsync();
    console.log(uri);

    const img = await FileSystem.readAsStringAsync(uri, {encoding: FileSystem.EncodingType.Base64})

    axios.interceptors.request.use(request => {
      console.log('Starting Request', data = {request});
      return request
    });


    axios.post('http://192.168.43.173:1337/mobile/image', data = {[this.state.word] : img})
      .then(res => {
        console.log(res);
        this.toggleModal()
      })

    this.setState({
      image: { img },
    });
  };

  onReady = () => {
    // console.log('ready!');
  };

  render() {

    return (
      <View style={styles.container}>
        <Modal coverScreen={true} isVisible={this.state.isModalVisible}>
          <View>
          <Card>
            <CardItem>
              <Body>
                <Text>
                   //Add stats here
                </Text>
              </Body>
            </CardItem>
          </Card>
            <Button title="Hide modal" onPress={this.toggleModal} style={{alignItems:'center', justifyContent:'center'}}><Text style={{textAlign: 'center'}}>Close</Text></Button>
          </View>
        </Modal>
        <View style={styles.container}>
          <Text style={styles.titleText}>{this.state.word}</Text>
          <View style={styles.sketchContainer}>
            

            <ExpoPixi.Sketch
              ref={ref => (this.sketch = ref)}
              style={styles.sketch}
              strokeColor={this.state.strokeColor}
              strokeWidth={this.state.strokeWidth}
              strokeAlpha={0.5}
              onReady={this.onReady}
              initialLines={this.state.lines}
            />
              
          <Button 
          light
          color={'blue'}
          style={{textAlign: 'center', alignItems:'center', justifyContent:'center'}}
          title="undo"
          onPress={() => {
            this.sketch.undo();
          }}
        >
          <Text style={{textAlign: 'center'}}>undo</Text>
        </Button>
          </View>
          <Button info onPress={ () => this.setState({word: randomWords()})} style={{width:600, marginTop: 18, marginBottom: 8, alignItems:'center', justifyContent:'center'}}><Text style={{textAlign: 'center'}}> Generate Word </Text></Button>

        <Button warning onPress={this.onClickAsync} style={{width:600, marginTop: 8, alignItems:'center', justifyContent:'center'}}><Text style={{textAlign: 'center'}}> Ready! </Text></Button>
        </View>


      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    textAlign: 'center'
  },
  titleText: {
    fontSize: 80,
    margin: 36,
    textAlign: 'center'
  },
  sketch: {
    flex: 1,

  },
  sketchContainer: {
    height: '50%',
    width: 600,
    borderColor: 'black',
    borderWidth: 5,

  },
  image: {
    flex: 1,
  },
  imageContainer: {
    height: '50%',
    borderTopWidth: 4,
    borderTopColor: '#E44262',
  },
  label: {
    width: '100%',
    padding: 5,
    alignItems: 'center',
  },
  button: {
    // position: 'absolute',
    // bottom: 8,
    // left: 8,
    zIndex: 1,
    padding: 12,
    minWidth: 56,
    minHeight: 48,
  },
});