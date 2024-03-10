import React from 'react';
import Logout from '../Logout';

const Header = ({ setIsAdding, setIsAuthenticated }) => {
  return (
    <header>
      <h1 style={{ fontSize: 'calc(40px)' }}>Address-Updater App!</h1>
      <h5 style={{ margin: '0' }}>LenDen Project: Rohan Rathod</h5>
      <div style={{ marginTop: '10px', marginBottom: '18px' }}>
        <button onClick={() => setIsAdding(true)}>Add Address</button>
        <Logout setIsAuthenticated={setIsAuthenticated} />
      </div>
    </header>
  );
};

export default Header;

