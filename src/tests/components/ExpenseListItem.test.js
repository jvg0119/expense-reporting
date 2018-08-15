import React from 'react';
import { shallow } from 'enzyme';
import ExpenseListItem from '../../components/ExpenseListItem';
import expenses from '../fixtures/expenses';

test('should render ExpenseListItem correctly', () => {
  const expense = expenses[0];
  // console.error('expense >>> ', {...expense})
  // console.error('expense >>> ', expense)
  // console.error('expense >>> ', expense === {...expense})
  
  // const wrapper = shallow(
  //   <ExpenseListItem 
  //     id={expense.id}
  //     description={expense.description} 
  //     amount={expense.amount}
  //     createdAt={expense.createdAt}
  //   />);
  // console.error('wrapper >>> ', wrapper)

  const wrapper = shallow(
    <ExpenseListItem 
      {...expense}
    />)
    expect(wrapper).toMatchSnapshot();
})








