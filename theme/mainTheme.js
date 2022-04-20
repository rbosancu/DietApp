import React from 'react';
import { StyleSheet } from 'react-native';
import { culori } from './nuante';

export const personalizare = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: culori.fundal,
      alignItems: 'center',
      justifyContent: 'center',
    },
    textPrezentareRosu : {
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: 'Roboto',
        color: "red",
    },
    textPrezentareRoz : {
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: 'Roboto',
        color: "pink",
    },
    textPrezentareAlbastru : {
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: 'Roboto',
        color: "blue",
    },
    textPrezentare : {
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: 'Roboto',
    },
    ceTineMorcovul: {
        flex: 1,
        width: "70%",
    },
    theMorcov : {
        flex:1,
        alignSelf: 'center',
        width: "100%",
        resizeMode:'contain',
    },
  });
  