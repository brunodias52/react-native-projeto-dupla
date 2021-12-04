import { StyleSheet } from "react-native"


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginTop: '5%',
        height: 130,
        marginRight: '5%',
        marginLeft: '5%',
        backgroundColor: '#fff',
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#000',
        
    },
    imagem: {
        
        marginTop: '1%',
        marginEnd: '1%',
        marginRight: '1%',
        marginLeft: '1%',
        height: '95%',
        width: '30%',
        borderRadius: 10,
        borderWidth: 3,
        borderColor: '#2EC93D',
        
    },
    imagemHeader: {
        height: 150,
    },
   
    nome: {
        marginTop: 20,
        justifyContent: 'center',
        fontSize: 25,
        fontWeight: '800',

        
    },
    cargocontainer: {
        width: 250,
        flexDirection: 'column',
        alignItems: 'center',
       },
    cargo: {
        fontSize: 15,
        fontWeight: '600',
        alignItems: 'center',
    },
    button: {  
        borderBottomColor: '#000', 
        marginTop: 20,
        backgroundColor: '#FB955C',
        borderRadius: 5,
        height: 25,
        width: 100,
        alignItems: 'center',
        borderWidth: 2,
        borderColor: '#000',
    

    },
    
})

export default styles;