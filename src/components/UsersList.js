import React from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import UserContext from '../context/User/UserContext';

const UserList = () => {
  const { users, getUsers, getProfile } = useContext(UserContext);

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="list-group">
      {users.map((user) => (
        <a
          className="list-group-item list-group-item-dark list-group-item-action d-flex flex-row m-1 align-items-end"
          href="#!"
          key={user.id}
          onClick={() => getProfile(user.id)}
        >
          <img
            src={user.avatar}
            alt="avatar"
            className="rounded-circle"
            width="70"
          />
          <div className="w-100 d-flex justify-content-center">
            <font face="Courier">
              <p>{`${user.first_name} ${user.last_name}`}</p>
            </font>
          </div>
        </a>
      ))}
    </div>
  );
};

export default UserList;
