import React, { useState,  useEffect } from 'react';
import { Container,
  Header, 
  Content, 
  Tab, 
  Tabs, 
  Text, 
  Card,
  Button, 
  CardItem,
  Body,
  Left,
  Thumbnail,
  Item,
  Input,
  Label,
  View
   } from 'native-base';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';


export default function PaginaTrabalhos() {
  const [image, setImage] = useState(null);

  useEffect(() => {
    (async () => {
      if (Constants.platform.ios) {
        const { status } = await ImagePicker.requestCameraRollPermissionsAsync();
        if (status !== 'granted') {
          alert('Você precisa habilitar permissão de acesso a arquivos para fazer isto!');
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <Container>
    <Content>
      <Card>
        <Button disabled full primary>
          <Text style= {{fontWeight: 'bold'}}>Tarefa de português</Text>
        </Button>
        <CardItem>
          <Text>
          Faça um Texto de acordo com a proposta da unicamp vista na última aula</Text>
        </CardItem>
        <CardItem>
          <Text>Data de envio: 18/12/2020</Text>
        </CardItem>
        <CardItem>
          <View style={{flex: 1, justifyContent: "center", alignItems:"center"}}>
            <Button success style={{alignSelf: "center", marginTop: 5}} 
            onPress={pickImage}>
            <Text>Selecione uma imagem</Text>
            </Button>
          </View>
      </CardItem>
      </Card>

      <Card>
        <Button disabled full primary>
          <Text style= {{fontWeight: 'bold'}}>Tarefa de Química</Text>
        </Button>
        <CardItem>
          <Text>Crie uma torre de líquidos com 5 fases e envie uma foto da mesma</Text>
        </CardItem>
        <CardItem>
          <Text>Data de envio: 20/09/2020</Text>
        </CardItem>
        <CardItem>
          <View style={{flex: 1, justifyContent: "center", alignItems:"center"}}>
            <Button success style={{alignSelf: "center", marginTop: 5}} 
            onPress={pickImage}>
            <Text>Selecione uma imagem</Text>
            </Button>
          </View>
        </CardItem>
      </Card>

      <Card>
        <Button disabled full primary>
          <Text style= {{fontWeight: 'bold'}}>Tarefa de Matemática</Text>
        </Button>
        <CardItem>
          <Text>Envie uma foto da matriz criada para a tarefa da aula 11</Text>
        </CardItem>
        <CardItem>
          <Text>Data de envio: 10/08/2020</Text>     
        </CardItem>
        <CardItem>
          <View style={{flex: 1, justifyContent: "center", alignItems:"center"}}>
            <Button success style={{alignSelf: "center", marginTop: 5}} 
            onPress={pickImage}>
            <Text>Selecione uma imagem</Text>
            </Button>
          </View>
        </CardItem>
      </Card>
    </Content>
    </Container>
  );
}
