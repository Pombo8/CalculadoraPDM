import React from "react";
import { Text, StyleSheet, Dimensions, TouchableHighlight } from 'react-native';


export default Button = (props) => {
  
    const stylesButton = [styles.button]

    if(props.double){
        stylesButton.push(styles.buttonDouble)
    }else if(props.triple){
        stylesButton.push(styles.buttonTriple)
    }else if(props.operation){
        stylesButton.push(styles.operationButton)
    }
    return (
      <TouchableHighlight
        style={stylesButton}
        onPress={props.onClick}
        >
        <Text style={styles.buttonText}>{props.label}</Text>
      </TouchableHighlight>
    );
  };


const styles = StyleSheet.create({
    button: {
        fontSize: 40,
        width: Dimensions.get('window').width /4,
        height: Dimensions.get('window').width /4,
        padding: 20,
        backgroundColor: '#ebe7e1',
        textAlign: 'center',
        borderWidth: 1,
        borderColor: '#f7f0f0',
        justifyContent: 'center',
        alignItems: 'center'
    },

    buttonText: {
        fontSize: 40
    },

    operationButton: {
        color: '#fcfafa',
        backgroundColor: '#c8eb5b',
        justifyContent: 'center',
        alignItems: 'center'
    },

    buttonDouble: {
        width: (Dimensions.get('window').width /4)*2,
    },

    buttonTriple: {
        width: (Dimensions.get('window').width /4) * 3,
    }

})