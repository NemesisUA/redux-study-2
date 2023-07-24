import { useDispatch, useSelector } from 'react-redux';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const cash = useSelector(state => state.cash);

  const deposit = (cash) => {
    dispatch({type: 'ADD_CASH', payload: cash});
  }

  const withdraw = (cash) => {
    dispatch({type: 'GET_CASH', payload: cash});
  }
 
  return (
    <div className="App">
      <div className='input-field'>
        <div className='account'>{account}</div>

        <button onClick={() => deposit(+prompt('How much do you want to deposit?', ''))}>Deposit</button>

        <button onClick={() => withdraw(+prompt('How much do you want to withdraw?', ''))}>Withdraw</button>
      </div>
    </div>
  );
}

export default App;
