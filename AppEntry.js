import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';
import { personalizare } from './theme/mainTheme';
import MorcovulPrincipal from './components/MorcovulPrincipal';
import TextSalut from './components/TextSalut';
import { culori } from './theme/nuante';

export default function App() {
  return (
    <View style={personalizare.container}>
      <StatusBar style='inverted' backgroundColor={culori.baraDeSus} animated={true}/>
      
      <MorcovulPrincipal/>
      
      <View style={{flex:1}}>

        <TextSalut stil={personalizare.textPrezentareRosu} mesaj="Eu sunt un mesaj rosu"/>
        <TextSalut stil={personalizare.textPrezentareRoz} mesaj="Eu sunt roz"/>
        <TextSalut stil={personalizare.textPrezentareAlbastru} mesaj="Eu sunt baietel"/>
      </View>

      
    </View>
  );
}
