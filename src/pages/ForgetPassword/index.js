import { StatusBar } from 'expo-status-bar';
import { Image, TextInput, View, TouchableOpacity, Text } from 'react-native'
import styles from './styles';

export default function ForgetPassword() {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Recuperar senha</Text>
        <Text style={styles.subTitle}>Insira seu e-mail para receber o link de recuperação</Text>
        <TextInput style={styles.input} placeholder='Email' autoCorrect={false} onChange={()=>{}} />
        <TouchableOpacity style={styles.botaoSubmit}>
          <Text>Enviar</Text>
        </TouchableOpacity>


        <StatusBar style ="auto" />
    </View>
  );
}
