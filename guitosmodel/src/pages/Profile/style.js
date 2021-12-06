import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: { 
        backgroundColor: "#7D50FF",
        alignItems: 'center',
        width: "100%",
        height: 150,
    },
    avatarDetails:{
        marginTop: 85,
        width: 120,
        height: 120,
        resizeMode: "cover",
        borderRadius: 90,
        borderColor: "#fff",
        borderWidth: 5,
    },
    nameTitle:{
        fontFamily: "Oswald",
        textAlign: "center",
        fontWeight: "700",
        paddingTop: 60,
        fontSize: 30,
        color: "#4A4444",
    },
    subtitle:{
        fontFamily: "Oswald",
        textAlign: "center",
        fontWeight: "700",
        fontSize: 15,
        color: "#838383",
    },
    infoContainer:{
        paddingTop: 18,
        flexDirection: "row",
        flex: 1,
        justifyContent: "space-evenly"
    },
    numbersStyle:{
        fontSize: 25,
        color: "#7D50FF",
        fontWeight: "bold",
    },
    textStyle:{
        fontSize: 15,
        color: "#838383",
        fontWeight: "bold",
    },
    actionButtons:{
        width: 125,
        height: 34,
        backgroundColor: "#2EC93D",
        borderRadius: 10,
        borderWidth: 2,
        elevation: 8,
    },
    myButtons:{
        flexDirection: "row",
        marginTop: 30,
        justifyContent: "space-evenly"
    },
    textButton:{
        color: "#fff",
        fontSize: 15,
        fontWeight: "bold",
        textAlign: "center",
        paddingTop: 3,
    },
    miniCardContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        paddingTop: 40,
    },
    cardPeso:{
        backgroundColor: "#81F938",
        width: 95,
        height: 95,
        borderRadius: 10,
        elevation: 8,
        borderWidth: 1
    },
    titleCards:{
        fontWeight: "bold",
        fontSize: 20,
        textAlign: "center",
    },
    subtitleCards:{
        fontSize: 12,
        textAlign: "center",
    },
    cardIdade:{
        backgroundColor: "#38A8F9",
        width: 95,
        height: 95,
        borderRadius: 10,
        elevation: 8,
        borderWidth: 1
    },
    cardLoc:{
        backgroundColor: "#F12D20",
        width: 95,
        height: 95,
        borderRadius: 10,
        elevation: 8,
        borderWidth: 1
    },
    cardAltura:{
        backgroundColor: "#F5F938",
        width: 95,
        height: 95,
        borderRadius: 10,
        elevation: 8,
        borderWidth: 1
    },
    titleExp:{
        fontSize: 28,
        textAlign: "center",
        fontWeight: "bold",
        paddingTop: 30,
        paddingBottom: 30,
    },
    cardExp:{
        width: 320,
        height: 80,
        alignSelf: "center",

        flexDirection: "row",
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: "#DDE297",
        elevation: 8,
    },
    store:{
        margin: '1%',
        width: 95,
        height: 75,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#000',
    },
    cardText:{
        paddingTop: 10,
        paddingLeft: 40,
        fontSize: 20,
        fontWeight: "bold",
        color: "#000",
    },
    cardYear:{
        paddingLeft: 90,
        fontSize: 15,
        fontWeight: "bold",
    },
}
);

export default styles;