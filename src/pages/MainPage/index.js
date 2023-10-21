import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import styles from './styles';

export default function MainPage(){
  return (
    <View style={styles.container}>
        <View style={styles.cabecalho}>
        <Text style={styles.titulo}>Sua livraria</Text>
        <Image style={styles.image} source={require('../../../assets/logo.png')}></Image>
        </View>
      <View style={styles.card}>
        <TextInput style={styles.input} placeholder='Pesquisar nos seus livros...' autoCorrect={false} onChange={()=>{}} />
        <View style={styles.livraria}>
          <View style={styles.setas}>
          <Image style={styles.seta} source={require('../../../assets/setaesquerda.png')}></Image>
          </View>
          <View style={styles.livros}>
          <Image style={styles.livro} source={require('../../../assets/livroExemplo.jpg')}></Image>
          </View>
          <View style={styles.setas}>
          <Image style={styles.seta} source={require('../../../assets/setadireita.png')}></Image>
          </View>
        </View>
        <View style={styles.paraVoce}>
            <Text style={styles.titulo3}>Seus espaço social</Text>
            <View style={styles.inform1}>
                <Text style={styles.tituloInform}>Seus clubes</Text>
                <Text style={styles.subInform}>Veja o que há de novo! </Text>
            </View>
            <View style={styles.inform2}>
                <Text style={styles.tituloInform}>Seu progresso</Text>
                <Text style={styles.subInform}>Atualize suas leituras</Text>
            </View>
        </View>
      </View>
    
      <StatusBar style="auto" />
    </View>
  );
}