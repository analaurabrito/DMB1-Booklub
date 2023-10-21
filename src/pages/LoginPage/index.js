import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import styles from './styles';
import { Link, NavigationContainer } from '@react-navigation/native';
import { useContext } from 'react';
import AuthContext from '../../context/AuthContext';

export default function LoginPage() {

  const { signIn } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>booklub.</Text>
      <View style={styles.card}>
        <View style={styles.content}>
          <Text style={styles.titulo}>Bem vindo!</Text>
          <Text style={styles.subtitulo}>Faça login para continuar</Text>
          <TextInput style={styles.input} placeholder='Usuário' autoCorrect={false} onChange={()=>{}} />
          <TextInput style={styles.input} placeholder='Senha' autoCorrect={false} onChange={()=>{}} />
          <Link to={{screen: 'FPasswordPage'}} style={styles.forgetPass}>Esqueci minha senha</Link>
          
          <View style={styles.botoes}>
              <TouchableOpacity style={styles.botaoLogin} onPress={() => signIn()}>
                <Link to={{screen: 'MainPage'}} style={styles.textoBotao}>Login </Link>
              </TouchableOpacity>
              <TouchableOpacity style={styles.botaoRegister}>
                  <Link to={{screen: 'RegisterPage'}} style={styles.textoBotao}>Cadastre-se</Link>
              </TouchableOpacity>
          </View>

          <View style={styles.cabecalho}>
          <Text style={styles.textoCabecalho}>"Um livro é um sonho que você segura na mão."</Text>
          <Image style={styles.image} source={require('../../../assets/logo.png')}></Image>
          </View>

        </View>
      </View>
    
      <StatusBar style="auto" />
    </View>
  );
}


