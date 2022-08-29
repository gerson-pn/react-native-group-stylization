import React from "react";
import { Image, Text, View, StyleSheet } from "react-native";
const estilos = StyleSheet.create({
    direcao: { flexDirection: 'row' },
    afastamento: { padding: 10 },
    tamanhoImagem: { width: 100, height: 100 },
    alinhamento: { textAlign: "center" },
    azul: { color: '#363FA8' }
})
const Cartao = (props) => {
    const url = props.url
    return (
        <View style={estilos.direcao}>
            <View style={estilos.afastamento}>
                <Image source={{ uri: url }} style={estilos.tamanhoImagem} ></Image>
            </View>
            <View style={estilos.afastamento}>
                <Text style={[estilos.alinhamento, estilos.azul]}>{props.nome}</Text>
                <Text style={estilos.azul}>{props.disciplina}</Text>
            </View>
        </View>
    )
}
export default Cartao


