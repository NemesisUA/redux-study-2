import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { addCashAction, getCashAction } from './store/cashReducer';
import { addUserAction, deleteUserAction } from './store/usersReducer';

function App() {
  const dispatch = useDispatch();
  const cash = useSelector(state => state.cash.cash);
  const users = useSelector(state => state.users.users);

  const deposit = (cash) => {
    dispatch(addCashAction(cash));
  }

  const withdraw = (cash) => {
    dispatch(getCashAction(cash));
  }

  const addUser = (name) => {
    const user = {
      name: name,
      id: Date.now(),
    }
    dispatch(addUserAction(user));
  }

  const deleteUser = (user) => {
    dispatch(deleteUserAction(user.id));
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
