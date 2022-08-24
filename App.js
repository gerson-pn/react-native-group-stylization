import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';

const App = () => {
  const [relogio, setRelogio] = useState(new Date())

  const contar = () => {
    setRelogio(new Date())
  }

  useEffect(() => {
    setInterval(() => {
      contar(), 1000
    })
  })

  return (
    <View>
      <Text>Data: {relogio.toLocaleDateString()}</Text>
      <Text>Hora: {relogio.toLocaleTimeString()}</Text>
    </View>
  )
}
export default App

