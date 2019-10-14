import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import loadable from './utils/loadable'
import 'animate.css'
import './style/App.scss'
import './style/base.scss'

// 公共模块
const DefaultLayout = loadable(() => import('./containers'))

// 基础页面
const View404 = loadable(() => import('./views/ErrorView/404'))
const View500 = loadable(() => import('./views/ErrorView/500'))
const Login = loadable(() => import('./views/Login'))

const App = (props) => (
    <Router>
        <Switch>
            <Route path='/' exact render={() => <Redirect to='/index' />} />
            <Route path='/500' component={View500} />
            <Route path='/login' component={Login} />
            <Route path='/404' component={View404} />
            <Route path='/' component={DefaultLayout} />
        </Switch>
    </Router>
)

export default App