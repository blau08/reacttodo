import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { auth } from '../firebase';

function Navbar({ user }) {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Todo App
        </Typography>
        {user ? (
          <>
            <Button color="inherit" component={Link} to="/">
              Todos
            </Button>
            <Button color="inherit" onClick={() => auth.signOut()}>
              Logout
            </Button>
          </>
        ) : (
          <Button color="inherit" component={Link} to="/login">
            Login
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
