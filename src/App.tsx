import React, { useEffect } from 'react';
import './App.css';
import { connect, Provider } from 'react-redux';
import { IStore } from './store/state';
import Transfer from './Transfer';
import store from './store';
import { getWalletAccountAction } from './store/action/wallet';

function App(props: any) {
  useEffect(() => {
    store.dispatch(getWalletAccountAction())
  }, [])
  
  return (
    <Provider store={store}>
      <div className="App">
        <Transfer />
      </div>
    </Provider>
  );
}

export default App;
