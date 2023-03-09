import React from 'react';
import { useConnect } from 'wagmi';
import { MetaMaskConnector } from 'wagmi/connectors/metaMask';

const App = () => {
    const { connect } = useConnect({
        connector: new MetaMaskConnector(),
    });
	
    return <div className="App"></div>;
};

export default App;
