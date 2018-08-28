import React from 'react'; 
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';
import { connect } from 'react-redux';
import numeral from 'numeral';

export const ExpensesSummary = ({expenseCount, expensesTotal}) => {
  const expenseWord = expenseCount === 1 ? 'expense' : 'expenses';
  const formattedExpensesTotal = numeral(expensesTotal/100).format('$0,0.00'); 
  return (
    <div>
      Viewing {expenseCount} {expenseWord} totalling {formattedExpensesTotal}
    </div>
  )
}  

const mapStateToProps = (state) => {
  const visibleExpenses = selectExpenses(state.expenses, state.filters);
  return {
    expenseCount: visibleExpenses.length,
    expensesTotal: selectExpensesTotal(visibleExpenses)
  }
}


// below is alt method but not setup for testing 
// const ExpensesSummary = (props) => {
//   const expenseWord = props.expenseCount.length === 1 ? "expense" : "expenses";
//   const formattedExpensesTotal = numeral(props.expensesTotal/100).format('$0,0.00')
//   return (
//     <div>
//       Viewing {props.expenseCount.length} {expenseWord} totalling {formattedExpensesTotal}
//     </div>
//   )
// }

// const mapStateToProps = (state, props) => {
//   const visibleExpenses = selectExpenses(state.expenses, state.filters)
//   return {
//     expenseCount: visibleExpenses,
//     expensesTotal: selectExpensesTotal(visibleExpenses)
//   }
// }
  
export default connect(mapStateToProps)(ExpensesSummary);
