import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#F0EDD4',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '10px',
    },

    card: {
        height: '70%',
        width: '90%',
        border: '15px', 
        backgroundColor: 'beige',
        alignItems: 'center',
        justifyContent: 'flex-start',
        borderRadius: '10px',
        paddingBottom: '20px',
    },

    cabecalho: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '85%',
        marginTop: '30px',
    },

    textoCabecalho: {
        color: '#000',
        fontSize: '10px',
        fontStyle: 'italic',
        fontWeight: '700',
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
        width: '250px',
        paddingBottom: '10px',
        letterSpacing: '1px',
        color: '#181818',
        textAlign: 'justify',
    },

    input: {
        backgroundColor: '#A8A196',
        width: '75%',
        marginTop: '15px',
        marginBottom: '15px',
        color: '#454545',
        fontSize: '14px',
        borderRadius: '30px',
        padding: '15px',
        justifyContent: 'center',

    },

    botoes: {
        flexDirection: 'row',
        width: '75%',
        justifyContent: 'space-between',
        marginTop: '15px'
    },

    botaoSubmit: {
        backgroundColor: '#319997',
        width: '75%',
        height: '45px',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '30px',
        fontSize: '18px',
        marginTop: '15px',
    },

    textoBotao: {
        fontWeight: '600',
        color: 'black',
        letterSpacing: '1px',
    },
  });

export default styles;

