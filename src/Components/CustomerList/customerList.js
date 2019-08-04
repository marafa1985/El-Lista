import React, { useState, useEffect, useContext } from 'react';
import {CustomerListContext} from '../context/globalContext'
import { View, FlatList, ActivityIndicator, StyleSheet } from 'react-native';
import { ListItem, SearchBar } from 'react-native-elements';

const CustomerList = () => {
  const context = useContext(CustomerListContext);
  const [value, setValue] = useState('')
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(context.CustomerListBind);
  const [error, setError] = useState(null);
  const [arrayholder, setArrayholder] = useState([]);
  const { Separator, Indicator } = styles;

  useEffect(() => {
    context.setCustomerList([{name:{first:'Ali',last:"Arafa"},email:"1"}]);
    context.getCustomerList().then(val=>{
      console.log(val);
      setData(val);
    });
  }, []);

  // const makeRemoteRequest = () => {
  //   const url = `https://randomuser.me/api/?&results=20`;
  //   setLoading(true);

  //   fetch(url)
  //     .then(res => res.json())
  //     .then(res => {
  //       setData(res.results);
  //       setError(res.error || null);
  //       setLoading(false);
  //       setArrayholder(res.results)
  //     })
  //     .catch(err => {
  //       setLoading(false);
  //       setError(err || null);
  //       console.log(error);
  //     });
  // };

  const searchFilterFunction = text => {
    setValue(text);

    const newData = arrayholder.filter(item => {
      const itemData = `${item.name.title.toUpperCase()} ${item.name.first.toUpperCase()} ${item.name.last.toUpperCase()}`;
      const textData = text.toUpperCase();

      return itemData.indexOf(textData) > -1;
    });
    setData(newData);
  };

  const renderHeader = () => {
    return (
      <SearchBar
        placeholder="Type Here..."
        lightTheme
        round
        onChangeText={text => searchFilterFunction(text)}
        autoCorrect={false}
        value={value}
      />
    );
  };

    if (loading) {
      return (
        <View style={Indicator}>
          <ActivityIndicator />
        </View>
      );
    }
    return (
      <View style={{ flex: 1 }}>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <ListItem
              title={`${item.name.first} ${item.name.last}`}
               subtitle={item.email}
              badge={{ value: 'yyd',status:"error", containerStyle: { marginTop: -20 } }}
            />
          )}
          keyExtractor={item => item.email}
          ItemSeparatorComponent={()=> <View style={ Separator }/>}
          ListHeaderComponent={renderHeader}
        />
      </View>
    );
}

const styles = StyleSheet.create({
  Separator:{
    height: 1,
    width: '86%',
    backgroundColor: '#CED0CE',
    marginLeft: '14%'
  },
  Indicator:{ 
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center' 
  }
})

export default CustomerList;
