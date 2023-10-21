import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: 'beige',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '10px',
    },

    card: {
        height: '70%',
        width: '90%',
        border: '15px', 
        backgroundColor: '#F0EDD4',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '10px',
        paddingBottom: '20px',
    },

    cabecalho: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '85%',
        marginBottom: '30px',
    },

    image: {
        width: '20px',
        height: '20px',
        borderRadius: '10px',
    },

    content: {
        flex: 1,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    }, 

    titulo:{
        paddingTop: '10px',
        fontSize: '20px',
        fontWeight: 'bold',
        letterSpacing: '1px',
        color: '#000',
    },

    subtitulo:{
        width: '300px',
        paddingBottom: '10px',
        letterSpacing: '1px',
        color: '#181818',
        textAlign: 'center',
    },

    input: {
        backgroundColor: '#A8A196',
        width: '75%',
        marginBottom: '15px',
        color: '#454545',
        fontSize: '14px',
        borderRadius: '30px',
        padding: '15px',
        justifyContent: 'center',

    },

    livraria: {
        flexDirection: 'row',
        width: '75%',
        height: '40%',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginTop: '30px'
    },

    setas: {
        width: '10%',
        height: '50%',
        justifyContent: 'center'
    },

    seta: {
        width: '25px',
        height: '25px'
    },

    livros: {
        width: '70%',
        height: '280px',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },

    livro: {
        width: '180px',
        height: '280px',
        borderRadius: '10px',
        padding: '1px',
    },

    paraVoce: {
        width: '75%',
        height: '30%',
        justifyContent: 'flex-start',
        marginTop: '40px',
    },

    titulo3: {
        fontSize: '15px',
        fontWeight: '700',
        marginBottom: '2px',
        color: '#181818',
        textAlign: 'right',
        letterSpacing: '1px',
    },

    inform1: {
        flex: 1,
        backgroundColor: '#B4CDE6',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '7px',
        marginTop: '5px',
        marginBottom: '5px',
    },

    inform2: {
        flex: 1,
        backgroundColor: '#FFE277',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '7px',
        marginTop: '5px',
        marginBottom: '5px',
    },

    tituloInform: {
        color: '#319997',
        fontWeight: 'bold',
        letterSpacing: '1px',
        textAlign: 'center',
    },

    subInform: {
        color: '#181818',
        fontSize: '10px',
        letterSpacing: '1px',
        textAlign: 'center',
    },

  });

export default styles;

