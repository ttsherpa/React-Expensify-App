import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

//store creation

const store = createStore(
    combineReducers({
        expenses: expenseReducer,
        filter: filterReducer
    })
);

store.subscribe(() =>{
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filter);
    console.log(visibleExpenses);
})

const expenseOne = store.dispatch(addExpense({description: 'Rent', amount:100, createdAt: 1000}));

const expenseTwo = store.dispatch(addExpense({description: 'Coffee', amount:300, createdAt: -1000}));

// store.dispatch(removeExpense({ id: expenseOne.expense.id }));

// store.dispatch(editExpense(expenseTwo.expense.id, {amount: 500}));

// store.dispatch(setTextFilter('rent'));

store.dispatch(sortByAmount());

// store.dispatch(sortByDate());

// store.dispatch(setStartDate(0));

// store.dispatch(setStartDate());

// store.dispatch(setEndDate(990));


const demoState = {
    expenses: [{
        id: 'lala',
        description: 'January Rent',
        note: 'This was the final payment for that address',
        amount: 54500,
        createdAt: 0
    }],

    filters: {
        text: 'rent',
        sortBy: 'amount', 
        startDate: undefined,
        endDate: undefined
    }
};


