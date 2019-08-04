import React from 'react';
import Routes from './Routes';
import { CustomerContext } from './src/Contexts/globalContext'

const App = () =>  
<CustomerContext>
    <Routes />
</CustomerContext>


export default App;
