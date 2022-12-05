
import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { StyleSheet, } from 'react-native';
import { Nom } from './components/ej1';
import { EntradaDEmail } from './components/ej2';
import { EntradaDeTelefon } from './components/ej3';

const App = () => {
  return (
    <PaperProvider>
      <Nom stilo={styles.estilDeText} unNom='Equipo Sergio Arianda AE3'></Nom>
      <EntradaDEmail />
      <EntradaDeTelefon />
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  estilDeText: {
    color: 'blue',
    fontSize: 25,
    fontWeight: 'bold',
  },
});

export default App;
