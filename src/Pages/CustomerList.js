import React from 'react';
import {
    Container, Header, Item, Input, Icon, Button, Text, List,
    Content, ListItem, Left, Body, Right, Switch, Separator, Title
} from 'native-base';

export default Home = (props) => {
    return (
        <Container style={{ backgroundColor: 'sliver' }}>
            <Header>
                <Body>
                    <Title>El Lista</Title>
                </Body>
                <Right>
                    <Button transparent>
                        <Icon name='md-person-add' />
                    </Button>
                </Right>
            </Header>
            <Content>
                <List>
                    <ListItem>
                        <Item rounded >
                            <Icon name="ios-search" />
                            <Input placeholder="Search" />
                            <Icon name="md-close" />
                        </Item>
                    </ListItem>

                    <Separator bordered >
                        <Text style={{ fontSize: 18 }}>Customers</Text>
                    </Separator>
                    <ListItem icon>
                        <Left>
                            <Button style={{ backgroundColor: "#FF9501" }}>
                                <Icon active name="airplane" />
                            </Button>
                        </Left>
                        <Body>
                            <Text>Airplane Mode</Text>
                        </Body>
                        <Right>
                            <Switch value={false} />
                        </Right>
                    </ListItem>
                    <ListItem icon>
                        <Left>
                            <Button style={{ backgroundColor: "#007AFF" }}>
                                <Icon active name="wifi" />
                            </Button>
                        </Left>
                        <Body>
                            <Text>Wi-Fi</Text>
                        </Body>
                        <Right>
                            <Text>GeekyAnts</Text>
                            <Icon active name="arrow-forward" />
                        </Right>
                    </ListItem>
                    <ListItem icon>
                        <Left>
                            <Button style={{ backgroundColor: "#007AFF" }}>
                                <Icon active name="md-person" />
                            </Button>
                        </Left>
                        <Body>
                            <Text>Bluetooth</Text>
                        </Body>
                        <Right>
                            <Text>On</Text>
                            <Icon active name="arrow-forward" />
                        </Right>
                    </ListItem>
                    <Separator bordered>
                        <Text style={{ fontSize: 18 }}>Tables</Text>
                    </Separator>
                </List>

            </Content>
        </Container>
    )
}
