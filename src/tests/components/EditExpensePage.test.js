import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../components/EditExpensePage';
import expenses from '../fixtures/expenses';
import moment from '../__mocks__/moment';

let editExpense, removeExpense, historySpy, expense, wrapper, bingo;
beforeEach(() => {
  editExpense = jest.fn(),
  removeExpense = jest.fn(),
  historySpy = {push: jest.fn()}, // changed name from history to historySpy to understand how it uses this var
  expense = expenses[0],
  bingo = 'myBingo',   // you can use these variables in your regular testing 
  wrapper = shallow(
    <EditExpensePage 
      editExpense={editExpense} 
      history={historySpy} // history is the prop being passed; historySpy mock function defined above
      removeExpense={removeExpense} 
      expense={expense} 
    />)
})

test('should render editExpensePage correctly', () => {
  expect(wrapper).toMatchSnapshot();
})

it('should handle editExpense', () => {
  wrapper.find('ExpenseForm').prop('onSubmit')(expense)
  expect(historySpy.push).toHaveBeenLastCalledWith('/');
  expect(editExpense).toHaveBeenLastCalledWith(expense.id, expense)  // you can use expenses[0]
  // these are reqular variables
  // console.error('expense >>> ', expense) 
  // console.error('bingo >>> ', bingo)
  // console.error('>>>> ', historySpy.push)
})

it('should handle removeExpense', () => {
  wrapper.find('button').simulate('click');
  expect(historySpy.push).toHaveBeenLastCalledWith('/');
  expect(removeExpense).toHaveBeenLastCalledWith({id: expense.id}) 
})








