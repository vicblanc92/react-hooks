import Profile from './components/Profile';
import UserList from './components/UsersList';
import UserState from './context/User/UserState';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <UserState>
        <div className="container d-flex align-items-center justify-content-center p-5">
          <div className="row">
            <div className="col-md-6">
              <UserList />
            </div>
            <div className="col-md-4 m-5">
              <Profile />
            </div>
          </div>
        </div>
      </UserState>
    </>
  );
}

export default App;
