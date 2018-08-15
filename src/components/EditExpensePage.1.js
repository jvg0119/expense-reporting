import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense, removeExpense } from '../actions/expenses';

// const EditExpensePage = (props) => {
export const EditExpensePage = (props) => { 
  return (
    <div>
      <ExpenseForm
        expense={props.expense}
        onSubmit={(expense) => {
          // props.dispatch(editExpense(props.expense.id, expense));
          props.editExpense(props.expense.id, expense);
          props.history.push('/');
        }}
      />
      <button onClick={() => {
        // props.dispatch(removeExpense({ id: props.expense.id }));
        props.removeExpense({ id: props.expense.id });
        props.history.push('/');
      }}>Remove</button>
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find((expense) => expense.id === props.match.params.id)
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    editExpense: (id, expense) => {
      dispatch(editExpense(id, expense))
    },
    removeExpense: (id) => {
      dispatch(removeExpense(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);

// Experiment     --- this works   no test for this experiment 
// using the mapDispatchToProps  but keeping the stateless component 
// not using the class component 
