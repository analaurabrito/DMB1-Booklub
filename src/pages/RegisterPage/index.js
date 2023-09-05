import { StatusBar } from 'expo-status-bar';
import { Image, TextInput, View, TouchableOpacity, Text } from 'react-native'
import styles from './styles';

export default function RegisterPage() {
  return (

    <View style={styles.container}>
        <View style={styles.head}>
          <Image style={styles.logo} source={require('../../../assets/logo.png')}/>
        </View>
        <Text style={styles.title}>Olá!</Text>
        <Text style={styles.subTitle}>Crie sua conta no Booklub</Text>
        <TextInput style={styles.input} placeholder='E-mail' autoCorrect={false} onChange={()=>{}} />
        <TextInput style={styles.input} placeholder='Nome de usuário' autoCorrect={false} onChange={()=>{}} />
        <TextInput style={styles.input} placeholder='Senha' autoCorrect={false} onChange={()=>{}} />
        <TextInput style={styles.input} placeholder='Confirmar senha' autoCorrect={false} onChange={()=>{}} />
        <TouchableOpacity style={styles.botaoSubmit}>
          <Text>Criar conta</Text>
        </TouchableOpacity>


        <StatusBar style ="auto" />
    </View>
  );
}
