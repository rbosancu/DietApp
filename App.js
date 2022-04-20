import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import App from './AppEntry';

export default function Main() {
    return (
        <PaperProvider>
            <App />
        </PaperProvider>
      
    );
  }