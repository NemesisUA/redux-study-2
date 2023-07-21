import './App.css';
import { useState } from 'react';

function App() {
  const [account, setAcount] = useState(100);

  const deposit = (value) => {
    setAcount(account => account + value);
  }

  const withdraw = (value) => {
    setAcount(account => account - value);
  }

  return (
    <div className="App">
      <div className='input-field'>
        <div className='account'>{account}</div>

        <button onClick={(e) => deposit(+prompt('How much do you want to deposit?', ''))}>Deposit</button>

        <button onClick={(e) => withdraw(+prompt('How much do you want to withdraw?', ''))}>Withdraw</button>
      </div>
    </div>
  );
}

export default App;
