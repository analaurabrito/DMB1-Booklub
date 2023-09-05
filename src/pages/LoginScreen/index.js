import { StatusBar } from 'expo-status-bar';
import { Image, TextInput, View, TouchableOpacity, Text } from 'react-native'
import styles from './styles';

export default function LoginScreen() {
  return (
    <View style={styles.container}>
        <Image style={styles.logo} source={require('../../../assets/logo.png')}/>
        <Text style={styles.title}>Bem Vindo!</Text>
        <Text style={styles.subTitle}>Faça login para continuar</Text>
        <TextInput style={styles.input} placeholder='E-mail' autoCorrect={false} onChange={()=>{}} />
        <TextInput style={styles.input} placeholder='Senha' autoCorrect={false} onChange={()=>{}} />
        <Text style={styles.forgetPass}>Esqueci minha senha</Text>
        
        <View style={styles.botoes}>
            <TouchableOpacity style={styles.botaoLogin}>
                <Text>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.botaoRegister}>
                <Text>Cadastre-se</Text>
            </TouchableOpacity>
        </View>

        <StatusBar style ="auto" />
    </View>
  );
}
