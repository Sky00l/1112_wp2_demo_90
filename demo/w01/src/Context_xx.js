import React, { useState, useContext, useReducer, useEffect } from 'react';
import Reducer_xx from './Reducer_xx';

// import cartItems from './data'

const url = 'https://course-api.com/react-useReducer-cart-project';

const AppContext_xx = React.createContext();

const initialState = {
   loading: false,
   cart: [],
   amount: 4,
   total: 999.9
}

const AppProvider_xx = ({children}) => {
  const [state, dispatch] = useReducer(Reducer_xx, initialState);

  useEffect(()=>{
    dispatch({ type: 'GET_TOTALS'});
  },[state.cart]);

  const clearCart = () => {
     dispatch({ type: 'CLEAR_CART' });
  }
  const increase = (id) => {
     dispatch({ type: 'INCREASE', payload: id });
  } 
  const decrease = (id) => {
    dispatch({ type: 'DECREASE', payload: id });
 } 

  const remove = (id) => {
    dispatch({ type: 'REMOVE', payload: id});
  }

  const fetchData = async () => {
     dispatch({ type: 'LOADING'});
     const response = await fetch(url);
     const cart = await response.json();
     console.log('cart', cart);
     dispatch({ type: 'DISPLAY_ITEMS', payload: cart });
  }

  useEffect(()=>{
    fetchData();
  }, []);

return <AppContext_xx.Provider value={{...state, clearCart, increase, decrease, remove}}>
     {children}
  </AppContext_xx.Provider>
};

const useGlobalContext_xx = () => {
  return useContext(AppContext_xx);
}

export { AppProvider_xx, useGlobalContext_xx};
