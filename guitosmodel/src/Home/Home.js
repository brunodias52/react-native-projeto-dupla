import React from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {database} from '../../Database';

import styles from './style';

function Home() {
  return (
    <>
      <Image
        source={{uri: 'https://i.imgur.com/kQhPlFp.png'}}
        style={styles.imagemHeader}
      />
      <ScrollView>
        {database.map(pessoa => (
          <View style={styles.container} key={pessoa.id}>
            <Image source={{uri: pessoa.foto}} style={styles.imagem} />

            <View style={styles.cargocontainer}>
              <Text style={styles.nome}>{pessoa.nome}</Text>
              <Text style={styles.cargo}>{pessoa.cargo}</Text>

              <TouchableOpacity style={styles.button}>
                <Text>Perfil</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
    </>
  );
}

export default Home;
