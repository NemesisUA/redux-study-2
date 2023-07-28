import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { addCashAction, getCashAction } from './store/cashReducer';
import { addUserAction, deleteUserAction } from './store/usersReducer';
import { fetchUsers } from './asyncActions/fetchUsers';

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
    console.log('user: ', user)
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

        <button onClick={() => dispatch(fetchUsers())}>Add users from DB</button>
      </div>

      <div className='users'>
        { users.length > 0 ? 
          users.map(user =>
             <div key={user.id} onClick={() => deleteUser(user)}>{user.name}</div>)

          : <p className='text'>There are no users!</p>
        }
      </div>
    </div>
  );
}

export default App;
