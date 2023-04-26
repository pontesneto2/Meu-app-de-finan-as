import React, {useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function Moviments({data}) {
const [showValue, setShowValue] = useState(false);

 return (
    <TouchableOpacity style={styles.container}>
        <Text style={styles.data}>{data.date}</Text>

        <View style={styles.content}>
            <Text style={styles.label}>{data.label}</Text>
            <Text style={data.type === 1 ? styles.value : styles.expenses}>
                {data.type === 1 ? `R$ ${data.value}` : `R$ -${data.value}`}
            </Text>
        </View>

    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginBottom:10,
        borderBottomWidth: 0.5,
        borderBottomColor: '#DADADA',
    },
    content:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 2,
        marginBottom: 2,
    },
    data:{
        color: '#DADADA',
        fontWeight: 'bold',
        marginTop: 10,
    },
    label:{
        fontWeight: 'bold',
        fontSize: 16,
    },
    value:{
        fontSize: 16,
        color: '#2ecc71',
        fontWeight: 'bold',
    },
    expenses:{
        fontSize: 16,
        color: '#ff0000',
        fontWeight: 'bold',
    }
})
