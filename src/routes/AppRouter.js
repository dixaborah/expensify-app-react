import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Dashboard from '../components/Dashboard'
import Edit from '../components/Edit'
import Header from '../components/Header'
import Help from '../components/Help'
import NotFound from '../components/NotFound'
import AddExpense from '../components/AddExpense'


const AppRouter = () => (
    <Router>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={Dashboard} exact={true}/>
                <Route path="/create" component={AddExpense}/>
                <Route path="/edit/:id" component={Edit}/>
                <Route path="/help" component={Help}/>
                <Route component={NotFound}/>
            </Switch>
        </div>
    </Router>
)

export default AppRouter