import React from 'react'
import SignupPage from './SignupPage';
import FeedPage from "./FeedPage";
import LoginPage from "./LoginPage";
import MyInfoPage from "./MyInfoPage";
import UserInfoPage from "./UserInfoPage";
import WelcomePage from "./WelcomePage";
import { BrowserRouter as Router, NavLink, Link, Route, Switch} from 'react-router-dom'
import { AuthProvider } from '../context/authContext'
import PrivateRoute from './PrivateRoute';
const routingPages = () => {
    return (
        <div>
            <Router>
                <AuthProvider>
                    <Switch>
                        <Route exact path='/' component={WelcomePage}/>
                        <Route  path='/signup' component={SignupPage}/>
                        <Route  path='/login' component={LoginPage}/>
            <PrivateRoute exact path='/dashboard' component={FeedPage}/>
                        <Route  path='/user' component={MyInfoPage}/>
                        <Route path='/user213' component={UserInfoPage}/>
                    </Switch>
                </AuthProvider>
            </Router>
            
        </div>
    )
}

export default routingPages
