import React from 'react';
import {TouchableOpacity } from 'react-native'
import { Container, Header, Left, Body, Right, Button, Icon, Title, View, Content, Text } from 'native-base';


export default About = (props) => {
    return(
        <Container>
        <Header hasSegment>
          <Left>
            <Button transparent>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body style={{justifyContent:"center", alignContent:"center"}}>
            <Title >Nota</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name="search" />
            </Button>
          </Right>
        </Header>
        <Content padder>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <TouchableOpacity onPress={props.navigation.openDrawer}>
                    <Text>Open Drawer</Text>
                </TouchableOpacity>
            <Text style={{ fontWeight: 'bold', marginTop: 20 }}>About</Text>
        </View>
        </Content>
      </Container>
    )
}
