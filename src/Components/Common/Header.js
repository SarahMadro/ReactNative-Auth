// import libraries
import React from 'react';
import { Text, View } from 'react-native';
// make component
const Header = (props) => {
  const { textStyle, viewStyle } = styles;
  return (
    <View style={viewStyle}>
      <Text style={textStyle}> {props.headerText} </Text>
    </View>
  )
};
const styles = {

  viewStyle: {
    backgroundColor: '#F8F8F8',
    alignItems: 'center',
    justifyContent: 'center',
    height: 80,
    paddingTop: 25,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: .2,
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
     fontSize: 20
  }
};

// make component available to other parts of app
export { Header };