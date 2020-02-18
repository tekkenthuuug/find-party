import React, { lazy, Suspense, useState } from 'react';
import { BrowserRouter, Switch, Route, RouteComponentProps } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import Navigation from './components/Navigation/Navigation';
import Loading from './components/Loading/Loading';
import ProtectedRoute from './ProtectedRoute';
const NotFound: React.FC<{ errorMessage: string }> = lazy(() => import('./components/NotFound/NotFound'));
const Feed: React.FC = lazy(() => import('./containers/Feed/Feed'));
const UserProfile: React.FC<{ userID: string; user: { id: string; username: string } }> = lazy(() =>
  import('./components/UserProfile/UserProfile')
);
const Register: React.FC<IFormProps> = lazy(() => import('./containers/Register/Register'));
const Login: React.FC<IFormProps> = lazy(() => import('./containers/Login/Login'));

export interface IFormProps extends RouteComponentProps {
  setUser: (state: { id: string; username: string }) => void;
  user: { id: string; username: string };
}

const App: React.FC = () => {
  const [user, setUser] = useState<{ id: string; username: string }>({
    id: '',
    username: ''
  });
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Navigation userID={user.id} setUser={setUser} />
      <Suspense fallback={<Loading />}>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/register" render={(props) => <Register {...props} setUser={setUser} user={user} />} />
          <Route exact path="/login" render={(props) => <Login {...props} setUser={setUser} user={user} />} />
          <Route exact path="/users/:id" render={({ match }) => <UserProfile userID={match.params.id} user={user} />} />
          <ProtectedRoute exact path="/feed" component={Feed} userID={user.id} />
          {/* "not found" route */}
          <Route render={() => <NotFound errorMessage="Ooops... 404 NOT FOUND" />} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
};
export default App;
