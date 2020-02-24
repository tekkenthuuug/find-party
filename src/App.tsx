import React, { lazy, Suspense, useState, createContext } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// Importing interfaces
import { IFormProps, IUserProfileProps, INotFound, IAuthUser } from './types/types';
// Importing components
import HomePage from './components/HomePage/HomePage';
import Navigation from './components/Navigation/Navigation';
import Loading from './components/Loading/Loading';
import ProtectedRoute from './ProtectedRoute';
import CreateEvent from './containers/CreateEvent/CreateEvent';
import EventPage from './components/EventPage/EventPage';
import SettingPage from './containers/SettingsPage/SettingsPage';

const NotFound: React.FC<INotFound> = lazy(() => import('./components/NotFound/NotFound'));
const Feed: React.FC = lazy(() => import('./containers/Feed/Feed'));
const UserProfile: React.FC<IUserProfileProps> = lazy(() => import('./containers/UserProfile/UserProfile'));
const Register: React.FC<IFormProps> = lazy(() => import('./containers/Register/Register'));
const Login: React.FC<IFormProps> = lazy(() => import('./containers/Login/Login'));

const initialUser = {
  id: sessionStorage.getItem('id') || '',
  username: sessionStorage.getItem('username') || ''
};

export const UserContext = createContext(initialUser);

const App: React.FC = () => {
  const [user, setUser] = useState<IAuthUser>(initialUser);

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Navigation userID={user.id} setUser={setUser} />
      <Suspense fallback={<Loading />}>
        <UserContext.Provider value={user}>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/register" render={(props) => <Register {...props} setUser={setUser} user={user} />} />
            <Route exact path="/login" render={(props) => <Login {...props} setUser={setUser} user={user} />} />
            <ProtectedRoute exact path="/feed" component={Feed} userID={user.id} />
            <ProtectedRoute exact path="/events/create" component={CreateEvent} userID={user.id} />
            <ProtectedRoute exact path="/settings" component={SettingPage} userID={user.id} />
            <Route
              exact
              path="/events/:id"
              render={({ match }) => <EventPage eventID={match.params.id} userID={user.id} />}
            />
            <Route
              exact
              path="/users/:id"
              render={({ match }) => <UserProfile userID={match.params.id} user={user} />}
            />
            {/* "not found" route */}
            <Route exact path="*" render={() => <NotFound errorMessage="Ooops... 404 NOT FOUND" />} />
          </Switch>
        </UserContext.Provider>
      </Suspense>
    </BrowserRouter>
  );
};
export default App;
