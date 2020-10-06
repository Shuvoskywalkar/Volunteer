import React from 'react';
import { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { UserContext} from '../../App';

const PrivateRoute = ({ children, ...rest }) => {
  const [loggedin]=useContext(UserContext)   
 
  return (

          <Route
      {...rest}
      render={({ location }) =>
      loggedin.Email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
   
  );
};

export default PrivateRoute;