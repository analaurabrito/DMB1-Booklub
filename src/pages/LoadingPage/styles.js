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

    center: {
        paddingTop: '40%',
        alignItems: 'center',
        justifyContent: 'center',
    },

    image: {
        width: '300px',
        height: '200px',
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
        textAlign: 'justify',
    },

    botaoLogin: {
        backgroundColor: '#EFB810',
        width: '300px',
        height: '45px',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '30px',
        fontSize: '18px',
        marginTop: '15px',
    },

    botaoRegister: {
        backgroundColor: '#319997',
        width: '300px',
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

});

export default styles;