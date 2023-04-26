import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from '../../components/Header'
import Balance from '../../components/Balance';
import Moviments from '../../components/Moviments';
import Actions from '../../components/Actions';

//dados de uma suposta api por ex.
const list = [
  {
    id:1,
    label: 'Boleto conta de luz',
    value: '300,90',
    date: '05/04/2023',
    type: 0 //despesas
  },
  {
    id:2,
    label: 'Pix Cliente x',
    value: '2.500,00',
    date: '01/04/2023',
    type: 1 //receitas-entradas
  },
  {
    id:3,
    label: 'Salário',
    value: '7.500,00',
    date: '17/04/2023',
    type: 1 //receitas-entradas
  },
  {
    id:4,
    label: 'Conta de Água',
    value: '179,60',
    date: '04/04/2023',
    type: 0 //despesas
  },
  {
    id:5,
    label: 'Internet Brisa',
    value: '99,90',
    date: '06/04/2023',
    type: 0 //despesas
  },
  {
  id:6,
  label: 'Empréstimo',
  value: '1.000,00',
  date: '10/04/2023',
  type: 0 //despesas
  },
]

export default function Home() {
  return (
    <View style={styles.container}>
        <Header name="Pontes Neto"/>
        {/* <Text>Página Home</Text> */}
        <StatusBar style="auto" />

        <Balance saldo="9.250,90" gastos="-527,00"/>

        <Actions/>

        <Text style={styles.title}>Últimas Movimentações</Text>

        <FlatList
          style={styles.list}
          data={list}
          keyExtractor={(item) => String(item.id)}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => <Moviments data={item}/> }
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  title:{
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 14,
    marginRight: 14,
    marginTop: 14,
  },
  list:{
    marginStart: 14,
    marginEnd: 14,
  }
});
