import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import COLORS from '../constants/colors';
import globalStyles from '../constants/global-styles';

const MealSection = (props) => {
  return (
    <View style={{ ...props.style }}>
      <Text style={styles.subtitle}>{props.headerCaption}</Text>
      {
        props.data.map((item, index) => {
          return (
            <View style={styles.stepContainer}>
              <Text style={{ ...globalStyles.bodyText, width: 25 }}>{index + 1}.</Text>
              <Text style={globalStyles.bodyText} numberOfLines={3}>{item}</Text>
            </View>
          )
        })
      }
    </View>
  );
}

const styles = StyleSheet.create({
  stepContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    margin: 5,
  },
  subtitle: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 18,
    marginBottom: 10,
    color: COLORS.secondaryColor
  },

});

export default MealSection;