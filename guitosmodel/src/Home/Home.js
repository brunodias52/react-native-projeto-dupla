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
import ItemSeparator from '../components/ItemSeparator'; 

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
               
               <View style={styles.idadecontariner}>
                <Text style={styles.cargo}>{pessoa.cargo}</Text>
                <Text style={styles.separator}>|</Text>
                <Text style={styles.cargo}>{pessoa.idade}</Text>
               </View>
              

              <TouchableOpacity style={styles.button}>
                <Text>Perfil</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
        <ItemSeparator />
      </ScrollView>
    </>
  );
}

export default Home;
