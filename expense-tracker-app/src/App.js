import logo from './logo.svg';
import './App.css';
import Purchase from './components/Purchase';
import { Route } from 'react-router-dom';
import ExpenseTracker from './components/ExpenseTracker';
import { Button } from 'react-bootstrap';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <p>
          ExpenseTracker
        </p>
        <hr/>
        <Button color="primary" className="px-4"
                onClick={() =>ExpenseTracker }
                  >
                  Login
                </Button>
      </header>
      <Purchase/>
    </div>
  );
}

export default App;
