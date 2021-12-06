import React from "react";
import {View, SafeAreaView, Text, Image, TouchableOpacity, Button, ScrollView} from "react-native"

import styles from "./style";
import ItemSeparator from "../../components/ItemSeparator";
import Icon from 'react-native-vector-icons/FontAwesome5';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icons from 'react-native-vector-icons/Entypo';

const Profile = ({ navigation }) => {
   
    return(
        <ScrollView>
        <>

         <SafeAreaView style={styles.container}>

            <TouchableOpacity  onPress={() => navigation.navigate('Home')} style={{position: "absolute", paddingTop: 30, paddingRight: 330}}>
                <Icon name="arrow-left" size={25} color="#202020"  />
            </TouchableOpacity>
             <Image style={styles.avatarDetails} source={require("./../../assets/img/dideco.png")}/>
         </SafeAreaView>
         
         
         <View>
             <Text style={styles.nameTitle}>Guilherme Dideco</Text>
             <Text style={styles.subtitle}>Modelo</Text>
         </View>
       

         <View style={styles.infoContainer}>
            <View>
                <Text style={styles.numbersStyle}>999</Text>
                <Text style={styles.textStyle}>Views</Text>
            </View>
            
            <View>
                <Text style={styles.numbersStyle}>1029</Text>
                <Text style={styles.textStyle}>Followers</Text>
            </View>
            
            <View>
                <Text style={styles.numbersStyle}>120</Text>
                <Text style={styles.textStyle}>Following</Text>
            </View>
        </View>    
         

         <View style={styles.myButtons} >
            <TouchableOpacity style={styles.actionButtons} title="Seguir">
                 <Text style={styles.textButton}>Reportar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.actionButtons} title="Seguir">
                 <Text style={styles.textButton}>Seguir</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.actionButtons} title="Mensagem">
                 <Text style={styles.textButton}>Mensagem</Text>
            </TouchableOpacity>
         </View>

        <View style={styles.miniCardContainer} >
            <View style={styles.cardPeso}>
            <Text style={{textAlign: "center", paddingTop: 4}}><Icon name="weight" size={30} color="#000" /></Text>
                <Text style={styles.titleCards}>65KG</Text>
                <Text style={styles.subtitleCards}>Atualizado em: 05/12/2021</Text>
        </View>

            <View style={styles.cardIdade}>
            <Text style={{textAlign: "center", paddingTop: 4}}><Icon name="user-clock" size={30} color="#000" /></Text>
                 <Text style={styles.titleCards}>19 anos</Text>
                 <Text style={styles.subtitleCards}>Atualizado em: 05/12/2021</Text>
            </View>

            <View style={styles.cardLoc}>
            <Text style={{textAlign: "center", paddingTop: 4}}><Icons name="location" size={33} color="#000" /></Text>
                <Text style={styles.titleCards}>Petrópolis  RJ</Text>

            </View>
            <View style={styles.cardAltura}>
                <Text style={{textAlign: "center", paddingTop: 3}}><Icon2 name="human-male-height" size={33} color="#000" /></Text>
                <Text style={styles.titleCards}>1.81m</Text>
                <Text style={styles.subtitleCards}>Atualizado em: 03/12/2021</Text>
            </View>
        </View>
       
        <View>
            <Text style={styles.titleExp}>Experiência Profissional:</Text>
        </View>
       
        <View>
            <View style={styles.cardExp}>
                <View>
                    <Image style={styles.store} source={require("./../../assets/img/Pirulito-1.jpg")}/>
                </View>
                <View>
                    <Text style={styles.cardText}>Loja Pirulito</Text>
                    <Text style={styles.cardYear}>2019</Text>
                </View>
            </View>

        <ItemSeparator />
            <View style={styles.cardExp}>
                <View>
                    <Image style={styles.store} source={{uri: 'http://www.rioconsult.net.br/wp-content/uploads/2016/05/logo-rioconsult.png'}}/>
                </View>
                <View>
                    <Text style={styles.cardText}>Rio Consult</Text>
                    <Text style={styles.cardYear}>2020</Text>
                </View>
            </View>
        <ItemSeparator /> 
        </View>
    
        </>
    </ScrollView>
         
    )
}

export default Profile;