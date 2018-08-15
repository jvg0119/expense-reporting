import moment from 'moment';

export default [
  {
    id: '1',
    description: 'Rent',
    note: 'this month rent', 
    amount: 80000, // $ 800   needs to be a number not a string 
    createdAt: 0 // epoc date  
    // createdAt: moment(0)
  },
  {
    id: '2',
    description: 'Phone bill',
    note: 'this month phone payment', 
    amount: 3000, // $30
    // createdAt: -1000 // 1ms after ;   oldest or last if sortByDate
    createdAt: moment(0).subtract(4, 'days').valueOf() // oldest     last
    // moment().add(7, 'd');
  },
  {
    id: '3',
    description: 'Gas bill',
    note: 'this month gas payment', 
    amount: 40000, // $400
    // createdAt: 2000 // 2ms before  ; newest  or first if sortByDate 
    createdAt: moment(0).add(4, 'days').valueOf() // newest   first 
  }
]

