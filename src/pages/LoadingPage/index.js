import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import styles from './styles';
import { Link, NavigationContainer } from '@react-navigation/native';

export default function LoadingPage() {
  return (
    <View style={styles.container}>
        <Text style={styles.logo}>booklub.</Text>
        <View style={styles.center}>
            <Image style={styles.image} source={require('../../../assets/LoadingHeader.png')}></Image>
            <Text style={styles.titulo}>Olá!</Text>
            <Text style={styles.subtitulo}>Bem vindo ao booklub: encontre aqui o seu clube do livro.</Text>
            <TouchableOpacity style={styles.botaoLogin}>
                <Link to={{screen: 'LoginPage'}} style={styles.textoBotao}>Entre com sua conta</Link>
            </TouchableOpacity>
            <TouchableOpacity style={styles.botaoRegister}>
                <Link to={{screen: 'RegisterPage'}} style={styles.textoBotao}>Crie uma conta</Link>
            </TouchableOpacity>
        </View>
      <StatusBar style="auto" />
    </View>
  );
}
