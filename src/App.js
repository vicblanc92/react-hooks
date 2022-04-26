import Profile from './components/Profile';
import UserList from './components/UsersList';
import UserState from './context/User/UserState';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <UserState>
        <div className="container d-flex justify-content-center align-items-center">
          <div className="row w-100 p-5">
            <div className="w-50">
              <UserList />
            </div>
            <div className="container w-50 d-flex justify-content-center">
              <Profile />
            </div>
          </div>
        </div>
      </UserState>
    </>
  );
}

export default App;
