import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import AddExpensePage from "../components/AddExpense";
import EditExpensePage from "../components/EditExpense";
import ExpenseDashboardPage from '../components/ExpenseDashboard';
import Header from '../components/Header';
import HelpPage from '../components/Help';
import NotFoundPage from '../components/NotFound';
import 'normalize.css/normalize.css';
import '../styles/styles.scss';


const AppRouter = () => (
    <BrowserRouter>
    <div>
        <Header />
        <Switch>
            <Route path="/" component={ExpenseDashboardPage} exact ={true}/>
            <Route path="/create" component={AddExpensePage} />    
            <Route path="/edit/:id" component={EditExpensePage} />
            <Route path="/help" component={HelpPage} />
            <Route component={NotFoundPage}/>
        </Switch>
    </div> 
    </BrowserRouter>
);

export default AppRouter;

