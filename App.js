import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Platform, KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback} from 'react-native';
import {FontAwesome5 } from '@expo/vector-icons'

export default function App() {
  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View style={styles.container}>
      <StatusBar backgroundColor='#fff' translucent={false}/>

      <Image source={require('./src/assets/instagram_logo.png')} 
      style={styles.logo}
      />

      <TextInput 
      placeholder='Celular, username ou email'
      style={styles.input}
      />

      <TextInput 
      secureTextEntry={true}
      placeholder='Sua senha'
      style={styles.input}
      />

      <View style={styles.forgotContainer}>
        <TouchableOpacity>
          <Text style={styles.forgotText}>Esqueceu sua senha</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginText}>Acessar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.facebook}>
        <FontAwesome5 name="facebook" size={25} color="#399fff" />
        <Text style={styles.facebookText}>continue</Text>
      </TouchableOpacity>

      <View style={styles.divisor}>
        <View style={styles.divisorLine}></View>
        <Text style={{ marginHorizontal: '3%' }}>OU</Text>
        <View style={styles.divisorLine}></View>
      </View>

      <View style={styles.signUpContainer}>
        <Text style={styles.signUpText}>Não possui uma conta?</Text>
        <TouchableOpacity>
          <Text style={styles.signUpButoon}>Cadastre-se</Text>
        </TouchableOpacity>
      </View>

    </View>
    </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    marginTop: Platform.OS == 'android' ? '20%' : '27%',
    marginBottom: Platform.OS == 'android' ? '13%' : '15%',
    width: 160,
    height:60,
  },
  input: {
    width: '90%',
    height: 42,
    backgroundColor: '#f4f3f3',
    marginBottom: 20,
    padding: 8,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#E0E0E0'
  },
  forgotContainer: {
    width: '90%',
    alignItems: 'flex-end',
  },
  forgotText: {
    color: '#399fff'
  },
  loginButton: {
    marginTop: '5%',
    backgroundColor: '#399fff',
    width: '90%',
    height: 42,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  loginText: {
    color: '#fff',
    fontSize: 17
  },
  facebook: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '15%'
  },
  facebookText: {
    color: '#399fff',
    paddingLeft: 8,
    fontSize: 15,
  },
  divisor: {
    marginTop: '10%',
    flexDirection: 'row',
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  divisorLine: {
    width: '45%',
    height: 2,
    backgroundColor: '#EFEDED',
    borderRadius: 5,
  },
  signUpContainer: {
    flexDirection: 'row',
    marginTop: '10%'
  },
  signUpText: {
    color: '#C4c4c4',
    paddingRight: 5,
  },
  signUpButoon: {
    color: '#399fff',
    fontWeight: 'bold'
  }

});
