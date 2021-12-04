import React from "react";
import {View, SafeAreaView, Text, Image, TouchableOpacity, ScrollView} from "react-native"
import styles from "./style";
import Icon from 'react-native-vector-icons/FontAwesome5';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icons from 'react-native-vector-icons/Entypo';




function Profile(props) {
    return(
    <ScrollView>
        <>
        
         <SafeAreaView style={styles.container}>
         
             <Image style={styles.avatarDetails} source={require("./../../assets/img/avatar.png")}/>
         </SafeAreaView>

         <View>
             <Text style={styles.nameTitle}>Nome</Text>
             <Text style={styles.subtitle}>descrição</Text>
         </View>

         <View style={styles.socialNumbers}>
            <Text style={styles.numbersStyle}>999</Text>
            <Text style={styles.numbersStyle}>999</Text>
            <Text style={styles.numbersStyle}>999</Text>
         </View>

         <View style={styles.socialInfo}>
            <Text style={styles.textStyle}>Views</Text>
            <Text style={styles.textStyle}>Followers</Text>
            <Text style={styles.textStyle}>Following</Text>
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
                <Text style={styles.subtitleCards}>Atualizado em: 03/12/2021</Text>
            </View>

            <View style={styles.cardIdade}>
            <Text style={{textAlign: "center", paddingTop: 4}}><Icon name="user-clock" size={30} color="#000" /></Text>
                 <Text style={styles.titleCards}>19 anos</Text>
                 <Text style={styles.subtitleCards}>Atualizado em: 03/12/2021</Text>
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
            
        </View>
        
        </>
    </ScrollView>
         
    )
}



export default Profile;