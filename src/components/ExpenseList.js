import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

const ExpenseList = (props) => (
    <div>
        {props.expenses.length == 0 && <p>No Expenses</p>}
        {props.expenses.length > 0 && <h1>Expense list</h1>}
        {props.expenses.map((expense) => {
           return <ExpenseListItem key = {expense.id} {...expense}/> 
        })}
    </div>
);

const mapStateToProps = (state)=> {
    return {
        expenses: selectExpenses(state.expenses, state.filter)
    };
};

export default connect(mapStateToProps)(ExpenseList);
