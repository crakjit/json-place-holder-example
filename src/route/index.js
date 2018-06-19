import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './../pages/home';
import PostRoute from './postRoute';

const Routes = () => (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/post' component={PostRoute} />
    </Switch>
)

export default Routes