import React, { useState } from 'react';
import { Button, Text, View } from 'react-native';

const App = () => {

  const [valor, setValor] = useState(0)

  const contar = () => {
    let novoValor = valor + 1
    setValor(novoValor)
  }
  
  return (
    <View style={{ flexDirection: 'row' }}>
      <View>
        <Button title='Clique aqui!' onPress={() => contar()} />
      </View>
      <View style={{ top: 10 }}><Text style={{ color: 'red' }}>Valor: {valor}</Text></View>
    </View>
  )
}
export default App

