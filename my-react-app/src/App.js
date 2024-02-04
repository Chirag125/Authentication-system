import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './containers/Home';
import Login from './containers/Login';
import Signup from './containers/Signup';
import Activate from './containers/Activate';
import ResetPassword from './containers/ResetPassword';
import ResetPasswordConfirm from './containers/ResetPasswordConfirm';


import { Provider } from 'react-redux';

import store from './store';
import FA from './containers/FA';

import Layout from './hocs/Layout';
import Dashboard from './containers/dashboard';
import Level1 from './containers/level1';
import Level2 from './containers/level2';
import Level3 from './containers/level3';
import StockMarketIntro from './containers/Activate';
import CompleteExamples from './views/index-sections/CompleteExamples';
import TA from './containers/TechnicalAnanlysis';
import Level2Page from './containers/level2';
const App = () => (
   <Provider store = {store}>
        <Router>
            <Layout>
                <Routes>
                    <Route path = "/" element = {<Home/>}/>
                    <Route path = "/login" element = {<Login/>}/>
                    <Route path = "/signup" element = {<Signup/>}/>
                    <Route path = "/reset-password" element = {<ResetPassword/>}/>
                    <Route path = "/TA" element = {<TA/>}/>
                    
                    <Route path = "/password/reset/confirm/:uid/:token" element = {<ResetPasswordConfirm/>}/>
                    <Route path = "/activate/:uid/:token" element = {<Activate/>}/>
                    <Route path = "/dashboard" element = {<Dashboard/>}/>
                    <Route path = '/stock' element = {<StockMarketIntro/>}/>
                    <Route path = '/FA' element = {<FA/>}/>
                    <Route path = '/api-level2-content' element = {<Level2Page/>}/>
                    
                   

                </Routes>
            </Layout>
        </Router>
        </Provider>
);

export default App;