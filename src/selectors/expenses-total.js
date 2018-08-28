
export default (expenses) => {  
  return expenses
  .map((expense) => expense.amount)
  .reduce((sum, value) => sum + value, 0)
}

// OK
// export default (expenses) => {  
//   if (expenses.length === 0) {
//     return 0
//   } else {
//     return expenses
//     .map((expense) => expense.amount)
//     .reduce((sum, value) => sum + value, 0)
//   }
// }

/* OK
export default (expenses) => {
  if (expenses.length === 0) {
    return 0
  } else {
    const expensesArray = expenses.map((expense) => {
      return expense.amount 
    }) // map
    // console.log('exArr',  expensesArray)
    // const result = expensesArray.reduce((sum, value) => sum + value, 0)
    // return result;
    return expensesArray.reduce((sum, value) => sum + value, 0);
  } // else 
} // export default
*/
