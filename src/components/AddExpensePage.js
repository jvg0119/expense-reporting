import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
// import { addExpense } from '../actions/expenses';
import { startAddExpense } from '../actions/expenses';

// export const AddExpensePage = (props) => (
export class AddExpensePage extends React.Component {

  onSubmit = (expense) => {
    // this.props.dispatch(addExpense(expense));
    // this.props.addExpense(expense)
    this.props.startAddExpense(expense)
    this.props.history.push('/');
  }

  render() {
    return (
      <div>
        <h1>Add Expense</h1>
          <ExpenseForm
            onSubmit={this.onSubmit}
          />
      </div>
    )  
  }
}  

const mapDispatchToProps = (dispatch) => ({
  // addExpense: (expense) => dispatch(addExpense(expense))
  startAddExpense: (expense) => dispatch(startAddExpense(expense))
});

export default connect(undefined, mapDispatchToProps)(AddExpensePage);
// export default connect()(AddExpensePage);
