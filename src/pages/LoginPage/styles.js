import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: 'beige',
        alignItems: 'center',
        justifyContent: 'baseline',
        padding: '10px',
    },

    logo: {
        paddingTop: '20%',
        fontStyle: 'italic',
        fontSize: '25px',
        fontWeight: '700',
        letterSpacing: '-2px',
    },

    card: {
        marginTop: '20%',
        height: '70%',
        width: '90%',
        border: '15px', 
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
        marginTop: '50px',
    },

    textoCabecalho: {
        fontSize: '10px',
        fontWeight: '300',
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
        marginTop: '20px',
        alignItems: 'center',
        justifyContent: 'center',
    }, 

    imgHeader: {
        width: '250px',
        height: '300px',
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

    botoes: {
        flexDirection: 'row',
        width: '75%',
        justifyContent: 'space-between',
        marginTop: '15px'
    },

    botaoLogin: {
        backgroundColor: '#EFB810',
        width: '48%',
        height: '45px',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '30px',
        fontSize: '18px',
        marginTop: '15px',
    },

    botaoRegister: {
        backgroundColor: '#319997',
        width: '48%',
        height: '45px',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '30px',
        fontSize: '18px',
        marginTop: '15px',
    },

    textoBotao: {
        fontWeight: '300',
        color: 'black',
        letterSpacing: '1px',
    },

    forgetPass: {
        color: '#181818',
        fontSize: '9px',
        width: '70%',
        marginBottom: '20px',
        textAlign: 'center',
        letterSpacing: '2px'
    },
  });

export default styles;

