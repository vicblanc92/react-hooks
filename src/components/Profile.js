import React, { useContext } from 'react';
import UserContext from '../context/User/UserContext';

const Profile = () => {
  const { selectedUser } = useContext(UserContext);

  return (
    <>
      {selectedUser ? (
        <div>
          <img
            className="rounded-circle"
            src={selectedUser.avatar}
            alt="avatar"
          />
          <font face="Impact">
            <h1>
              {selectedUser.first_name} {selectedUser.last_name}
            </h1>
          </font>
          <font face="Courier">
            <h3>{selectedUser.email}</h3>
          </font>
        </div>
      ) : (
        <font face="Impact">
          <h1 className="p-3 mb-2 bg-dark text-white">No user selected</h1>
        </font>
      )}
    </>
  );
};

export default Profile;
