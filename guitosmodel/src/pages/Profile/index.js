import React from "react";
import {View, SafeAreaView, Text, Image, TouchableOpacity , ScrollView, PermissionsAndroid} from "react-native"

import styles from "./style";
import ItemSeparator from "../../components/ItemSeparator";
import Icon from 'react-native-vector-icons/FontAwesome5';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icons from 'react-native-vector-icons/Entypo';

const Profile = (props) => {
   
    return(
        <ScrollView>
        <>

         <SafeAreaView style={styles.container}>

            <TouchableOpacity  onPress={() => props.navigation.navigate('Home')} style={{position: "absolute", paddingTop: 30, paddingRight: 330}}>
                <Icon name="arrow-left" size={25} color="#202020"  />
            </TouchableOpacity>
             <Image style={styles.avatarDetails} source={{uri: props.route.params?.foto}}/>
         </SafeAreaView>
         
         
         <View>
             <Text style={styles.nameTitle}>{props.route.params?.nome}</Text>
             <Text style={styles.subtitle}>{props.route.params?.cargo}</Text>
         </View>
       

         <View style={styles.infoContainer}>
            <View>
                <Text style={styles.numbersStyle}>{props.route.params?.view}</Text>
                <Text style={styles.textStyle}>Views</Text>
            </View>
            
            <View>
                <Text style={styles.numbersStyle}>{props.route.params?.seguidores}</Text>
                <Text style={styles.textStyle}>Followers</Text>
            </View>
            
            <View>
                <Text style={styles.numbersStyle}>{props.route.params?.seguindo}</Text>
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
                <Text style={styles.titleCards}>{props.route.params?.peso}</Text>
                <Text style={styles.subtitleCards}>Atualizado em: 05/12/2021</Text>
        </View>

            <View style={styles.cardIdade}>
            <Text style={{textAlign: "center", paddingTop: 4}}><Icon name="user-clock" size={30} color="#000" /></Text>
                 <Text style={styles.titleCards}>{props.route.params?.idade}</Text>
                 <Text style={styles.subtitleCards}>Atualizado em: 05/12/2021</Text>
            </View>

            <View style={styles.cardLoc}>
            <Text style={{textAlign: "center", paddingTop: 4}}><Icons name="location" size={33} color="#000" /></Text>
                <Text style={styles.titleCards}>{props.route.params?.cidade}</Text>

            </View>
            <View style={styles.cardAltura}>
                <Text style={{textAlign: "center", paddingTop: 3}}><Icon2 name="human-male-height" size={33} color="#000" /></Text>
                <Text style={styles.titleCards}>{props.route.params?.altura}</Text>
                <Text style={styles.subtitleCards}>Atualizado em: 03/12/2021</Text>
            </View>
        </View>
       
        <View>
            <Text style={styles.titleExp}>Experiência Profissional:</Text>
        </View>
       
        <View>
            <View style={styles.cardExp}>
                <View >
                    <Image style={styles.store} source={{uri: props.route.params?.imgTrab}}/>
                </View>
                <View style={styles.card2}>
                    <Text style={styles.cardText}>{props.route.params?.trab}</Text>
                    <Text style={styles.cardYear}>{props.route.params?.anoTrab}</Text>
                </View>
            </View>

        <ItemSeparator />
            <View style={styles.cardExp}>
                <View>
                    <Image style={styles.store} source={{uri: props.route.params?.imgTrab2}}/>
                </View>
                <View style={styles.card2}>
                    <Text style={styles.cardText}>{props.route.params?.trab2}</Text>
                    <Text style={styles.cardYear}>{props.route.params?.anoTrab2}</Text>
                </View>
            </View>
        <ItemSeparator /> 
        </View>
    
        </>
    </ScrollView>
         
    )
}

export default Profile;