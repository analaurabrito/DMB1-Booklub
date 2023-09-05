import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    background: {
        flex: 1,
        color: '#EBE3BC',
        alignItems: 'center',
        justifyContent: 'center'
    },

    container: {
        flex: 1,
        backgroundColor: '#EBE3BC',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
    },

    logo: {
        width: '50px',
        height: '40px',
        marginBottom: '5px',
    },

    title: {
        fontWeight: 'bold',
        fontSize: '30px',
    },

    subTitle: {
        fontSize: '14px',
        marginBottom: '40px',
    },

    input: {
        backgroundColor: '#D9D9D9',
        width: '75%',
        marginBottom: '15px',
        color: '#858585',
        fontSize: '14px',
        borderRadius: '7px',
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
        backgroundColor: '#D0ADDA',
        width: '45%',
        height: '45px',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '7px',
        fontSize: '18px',
        marginTop: '15px',
    },



  });

  export default styles;
  