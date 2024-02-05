import logo from './logo.svg';
import './App.css';
import WhoAreYou from './WhoAreYou';
import { AppProvider } from './context/context';

function App() {
  return (
    <div className="App">
      <AppProvider>
        
      <WhoAreYou/>
      </AppProvider>
      
     
    </div>
  );
}

export default App;
