import React from 'react';

import { useGlobalContext_xx } from './Context_xx';

// components
import Navbar_xx from './components/Navbar_xx';
import CartContainer_xx from './components/CartContainer_xx';
// items

const App_xx = () => {
  const { loading, cart } = useGlobalContext_xx();
  if (loading) {
    return (
      <div className='loading'>
        <h1>Loading...</h1>
      </div>
    );
  }
  return (
    <main>
      <Navbar_xx />
      <CartContainer_xx />
    </main>
  );
};

export default App_xx;
