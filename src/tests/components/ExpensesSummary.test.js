import React from 'react';
import { ExpensesSummary } from '../../components/ExpensesSummary';
import { shallow } from 'enzyme';

test('should render expense summary with 1 expense', () => {
  const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={100}/>);
  expect(wrapper).toMatchSnapshot();
})

test('should render expense summary with multiple expenses', () => {
  const wrapper = shallow(<ExpensesSummary expenseCount={5} expensesTotal={10000}/>);
  expect(wrapper).toMatchSnapshot();
})
