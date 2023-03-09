import React from 'react';
import { useConnect } from 'wagmi';
import { MetaMaskConnector } from 'wagmi/connectors/metaMask';
import { ExampleService } from './services/example-service/src';

const App = () => {
    const { connect } = useConnect({
        connector: new MetaMaskConnector(),
    });

    return (
        <div className="App">
            <ExampleService />
        </div>
    );
};

export default App;
