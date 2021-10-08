import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'rgba(245, 246, 250,1.0)',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    titulo: {
        flex: 1,
        fontSize: 30,
        top: 50,
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'rgba(47, 54, 64,1.0)',
    },
    corpo: {
        bottom: 30,
        fontSize: 18,
    },
    camera:{
        flex: 1,
        flexBasis: 350,
        width: 350,
    },
    flipContainer: {
        flex: 1,
        backgroundColor: 'transparent',
        flexDirection: 'row',
        margin: 20,
    },
    flipText: {
        fontSize: 18,
        color: 'white',
    },
    buttonStart: {
        alignItems: 'center',
        backgroundColor: 'black',
        alignContent: 'center',
        padding: 20,
        width: 200,
        borderRadius: 10,
    },
    buttonTexto: {
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
    }
});

export default styles