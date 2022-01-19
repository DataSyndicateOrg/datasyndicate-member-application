import logo from './logo.svg';
import './App.css';
import WalletConnector from './components/metamaskLink/connector';
import { Web3ReactProvider } from '@web3-react/core';
import Web3 from 'web3';

function getLibrary(provider) {
    return new Web3(provider)
}

function App() {
  return (
    <div>
      <Web3ReactProvider getLibrary={getLibrary}>
      <WalletConnector></WalletConnector>
      </Web3ReactProvider>
    </div>
  );
}

export default App;
