import React, { Component } from 'react';
import { StyleSheet, View, TextInput, Picker, Text } from 'react-native';
import Button from './button';
import RaceForm from './race_form';

const styles = StyleSheet.create({
  container: {
    paddingTop: 75,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    backgroundColor: '#fff'
  },
  container2: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    backgroundColor: '#fff'
  },
  input: {
    height: 50,
    borderColor: '#666',
    borderWidth: 1,
    paddingLeft: 20
  },
  selectorTitle: {
    textAlign: 'center',
    fontSize: 25
  },
  next: {
    backgroundColor: '#2ECC71',
    alignItems: 'center',
    justifyContent: 'center',
    height: 80
  }
});

class Form extends Component {

  GoToRaceForm() {
    this.props.navigator.push({
      title: 'Race Information',
      component: RaceForm
    })
  }

  // Hack for now
  constructor (props) {
    super(props)
    this.state = {
      counties: [],
      text: "Enter Precinct",
      state: 'Default',
      county: 'Default'
    }
    // fetch('https://go41.com/vote/timer/counties.php?state=IL', obj).then(res => {debugger; return res.json()}).then(function (json) { this.setState({ counties: json.counties }) }.bind(this)).catch(function () {debugger;})
  }

  onChange () {

  }

  render () {
    return (
      <View style={styles.container}>
        <View style={styles.container2}>
          <Text style={styles.selectorTitle}>Select a State</Text>
          <Picker
            selectedValue='hello'
            onValueChange={this.onChange.bind(this)}
          >
            <Picker.Item label="Wutang" value="wutang" />
            <Picker.Item label="ODB" value="odb"  />
            <Picker.Item label="Jay-Z" value="jayz" />
          </Picker>
        </View>
        <View style={styles.container2}>
          <Text style={styles.selectorTitle}>Select a County</Text>
          <Picker
            selectedValue='wutang'
            onValueChange={this.onChange.bind(this)}
          >
            <Picker.Item label="Wutang" value="wutang" />
            <Picker.Item label="ODB" value="odb"  />
            <Picker.Item label="Jay-Z" value="jayz" />
          </Picker>
        </View>
        <TextInput
          style={styles.input}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
        />
        <Button
          text="Next"
          style={styles.next}
          onClick={() => this.GoToRaceForm()}
        />
      </View>
    );
  }
}

export default Form
