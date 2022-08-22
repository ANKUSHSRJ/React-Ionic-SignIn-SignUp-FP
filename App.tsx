import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import LogIn from './pages/LogIn';
import SignUp from './pages/SignUp';
import ForgotPasword from './pages/ForgotPassword';
import SendOtp from './pages/SendOtp';
import ChangePassword from './pages/ChangePassword';
import Home from './pages/Home'
import Profile from './pages/profile'

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

const App: React.FC = (props) => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>

        <Route exact path="/profile" component={Profile} />

        <Route exact path="/home" component={Home} />
        <Route exact path="/changepassword" component={ChangePassword} />
        <Route exact path="/sendotp" component={SendOtp} />
        <Route exact path="/forgotpasword" component={ForgotPasword} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/login" component={LogIn} />
        <Redirect exact path="/" to="/login" />

      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
