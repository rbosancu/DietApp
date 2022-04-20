import React from 'react';
import { View, Image } from 'react-native';
import { personalizare } from '../theme/mainTheme';

export default function MorcovulPrincipal ()
{
    return (
        <View style={personalizare.ceTineMorcovul}>
            <Image 
              source={{
                uri: 'https://www.pngplay.com/wp-content/uploads/4/Carrot-Transparent-PNG.png',
              }}
              
              style={personalizare.theMorcov}
            />
          </View>
    
    );
}