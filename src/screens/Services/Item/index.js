import React from 'react';
import { View, Text, Button } from 'react-native';

import CampoInteiro from '../../../componets/CampoInteiro';
import estilos from './estilos';

export function Item({ name , price, description }) {
  const [quantidade, setQuantidade] = React.useState(1);

  return (
    <>
      <View style={estilos.informacao}>
        <Text style={estilos.nome}>{name}</Text>
        <Text style={estilos.descricao}>{description}</Text>
        <Text style={estilos.preco}>{price}</Text>
      </View>
      <View style={estilos.carrinho}>
        <View style={estilos.valor}>
          <Text style={estilos.descricao}>Quantidade: </Text>
          <CampoInteiro valor={quantidade} onChangeText={setQuantidade} />
        </View>
        <View style={estilos.valor}>
          <Text style={estilos.descricao}>Preço: </Text>
          <Text style={estilos.preco}>0</Text>
        </View>
        <Button title="Adicionar ao carrinho" />
      </View>
      <View style={estilos.divisor} />
    </>
  );
}