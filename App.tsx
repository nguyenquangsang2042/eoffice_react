
import React from 'react';                            // Adjust the import path based on your file structure
import LoginScreen from './src/screens/LoginScreen';
import { DbController } from './src/controllers/DBController';
      

function App(): JSX.Element {
  DbController.getInstance().initialize();
  return (<LoginScreen/>);
}
export default App;
