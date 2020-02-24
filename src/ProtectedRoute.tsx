import React from 'react';
import { Route, Redirect } from 'react-router-dom';

interface IProtectedRoute {
  component: React.ElementType;
  exact: boolean;
  path: string;
  userID: string;
  rest?: any;
}

const ProtectedRoute: React.FC<IProtectedRoute> = ({ userID, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (userID) {
          return <Component {...props} userID={userID} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: '/login',
                state: {
                  from: props.location
                }
              }}
            />
          );
        }
      }}
    />
  );
};

export default ProtectedRoute;
