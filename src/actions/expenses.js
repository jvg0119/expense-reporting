import uuid from 'uuid';
import database from '../firebase/firebase';

// ADD_EXPENSE   original 
// export const addExpense = (
//   {
//     description = '',
//     note = '',
//     amount = 0,
//     createdAt = 0
//   } = {}
// ) => ({
//   type: 'ADD_EXPENSE',
//   expense: {
//     id: uuid(),
//     description,
//     note,
//     amount,
//     createdAt
//   }
// });

export const addExpense = (expense) => ({  // modified ADD_EXPENSE 
  type: 'ADD_EXPENSE',
  expense
});

// move the default in startAddExpense 
export const startAddExpense = (expenseData = {}) => {
  return (dispatch) => {
    const {
      description = '',
      note = '',
      amount = 0,
      createdAt = 0
    } = expenseData;
    const expense = { description, note, amount, createdAt };

    return database.ref('expenses').push(expense).then((ref) => {
      dispatch(addExpense({
        id: ref.key,
        ...expense
      }));
    });  // end of then()
  };
  // console.log('from startAddExpense ! ')
};

// startAddExpense()

// REMOVE_EXPENSE
export const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
});

// EDIT_EXPENSE
export const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
});


//////////////////////////// 
// test only delete later or use as notes 
/*
const data = {
  a: "real first data",
  b: "real second data"
}
// const {a} =data
// console.log(a)
const makeData = (data = {}) => {
  return () => {
    const {a = 'first default data', b = 'second default data'} = data // default data
    console.log('returning a function inside a function !!!')
    console.log(a)
  }
}
*/
// makeData(data)();







