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

  render()
  {
    return (
        <View style={styles.container}>

            <View style={styles.welcomeContainer}>
              <Image
                  source={{uri:'https://raw.githubusercontent.com/HandRiGht/handright/master/Logo2.png'
                }}
                  
                  style={styles.welcomeImage}
              />
            </View>

            <View style={styles.getStartedContainer}>
              <Text> You have selected: {this.state.language}</Text>
              <Picker style={styles.getLanguagePicker}
                      selectedValue={this.state.language}
                      style={{height: 50, width: 200}}
                      onValueChange={(itemValue, itemIndex) =>
                          this.setState({language: itemValue})
                      }>
                <Picker.Item label="English" value="English" />
                <Picker.Item label="French" value="French" />
                <Picker.Item label="German" value="German" />
                <Picker.Item label="Italian" value="Italian" />
                <Picker.Item label="Portuguese" value="Portuguese" />
                <Picker.Item label="Spanish" value="Spanish" />
              </Picker>
            </View>
            <View style={styles.getButtonContainer}>
              <View style={styles.button_1}>
                <Button
                    title="Learner"
                    onPress={() => {
                      console.log('clicked');
                    }}
                />
              </View>
              <View style={styles.button_1}>
                <Button
                    title="Improver"
                    onPress={() => {
                      console.log('clicked');
                    }}
                />
              </View>
            </View>
        </View>
    );
  }

}

HomeScreen.navigationOptions = {
  header: null,
};

function handleLearnMorePress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/versions/latest/workflow/development-mode/'
  );
}

function handleHelpPress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/versions/latest/workflow/up-and-running/#cant-see-your-changes'
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 60,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 150,
    height: 120,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
    marginTop: 25,
    flex: 1,
  },
  getLanguagePicker:{

  },
  getButtonContainer:{
    flexDirection: 'row',
    flex: 1,
    marginTop: 40,
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
