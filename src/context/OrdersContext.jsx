import React, { createContext, useState, useContext } from 'react';
import axios from 'axios'; 

const OrdersContext = createContext();

export const GlobalArrayProvider = ({ children }) => {
  const [globalArray, setGlobalArray] = useState([]);

  const addToArray = async (value) => {
    setGlobalArray((prevArray) => {
      const newArray = [...prevArray, value];
      console.log("globalArray w OrdersContext:", newArray);

      postToLocalhost(newArray);
      return newArray;
    });
  };

  const postToLocalhost = async (data) => {
    try {

      const response = await axios.post('http://localhost:3000/orders', data);
      console.log('Data posted successfully:', response.data);
    } catch (error) {
      console.error('Error posting data:', error);
    }
  };

  return (
    <OrdersContext.Provider value={{ globalArray, addToArray }}>
      {children}
    </OrdersContext.Provider>
  );
};

export const useGlobalOrders = () => useContext(OrdersContext);