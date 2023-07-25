import { useDispatch, useSelector } from 'react-redux';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const cash = useSelector(state => state.cash.cash);
  const users = useSelector(state => state.users.users);

  const deposit = (cash) => {
    dispatch({type: 'ADD_CASH', payload: cash});
  }

  const withdraw = (cash) => {
    dispatch({type: 'GET_CASH', payload: cash});
  }

  const addUser = (name) => {
    const user = {
      name: name,
      id: Date.now(),
    }
    dispatch({type: 'ADD_USER', payload: user})
  }

  const deleteUser = (user) => {
    dispatch({type: 'DELETE_USER', payload: user.id})
  }
 
  return (
    <div className="App">
      <div className='input-field'>
        <div className='account'>{cash}</div>

        <button onClick={() => deposit(+prompt('How much do you want to deposit?', ''))}>Deposit</button>

        <button onClick={() => withdraw(+prompt('How much do you want to withdraw?', ''))}>Withdraw</button>

        <button onClick={()=> addUser(prompt('Add new user name'))}>Add User</button>
      </div>

      <div className='users'>
        { users.length > 0 ? 
          users.map(user =>
             <div onClick={() => deleteUser(user)}>{user.name}</div>)

          : <p className='text'>There are no users!</p>
        }
      </div>
    </div>
  );
}

export default App;
