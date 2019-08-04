import React,{useState} from 'react';
import AsyncStorage from '@react-native-community/async-storage';

export const CustomerListContext = React.createContext({
    customerList: [],
    getCustomerList: () => {},
    updateCustomerList:(customerList) =>{}
});

export const CustomerContext = props => {
const [CustomerListBind, setCustomerList] = useState([]);
const getCustomerList = async () => {
    try {
      const value = await AsyncStorage.getItem("customerList")
      if(value !== null) {
          console.log(JSON.parse(value));
        setCustomerList(JSON.parse(value));
        console.log(CustomerListBind);
      }
    } catch(e) {
        alert(e);
    }
  }

  const saveCustomerList = async (customerList) => {
    try {
      await AsyncStorage.setItem("customerList",JSON.stringify(customerList))
    } catch (error) {
        alert("error3: " + error);
    }
  }
    return(
        <CustomerListContext.Provider value={{
                updateCustomerList: saveCustomerList,
                getCustomerList: getCustomerList,
                CustomerList: CustomerListBind
            }}>
            {props.children}
        </CustomerListContext.Provider>
    )
}