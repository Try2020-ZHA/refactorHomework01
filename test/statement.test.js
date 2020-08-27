const test = require('ava')
const {statement}= require('../src/statement')


    
const plays = {
    'hamlet': {
      'name': 'Hamlet',
      'type': 'tragedy',
    },
    'as-like': {
      'name': 'As You Like It',
      'type': 'comedy',
    },
    'othello': {
      'name': 'Othello',
      'type': 'tragedy',
    },
  };

test('a simple test',t=>{
    t.true(true);
    t.is(1,1);
});

test('test output',t=>{
    const invoice = {
        'customer': 'BigCo',
        'performances': [
          {
            'playID': 'hamlet',
            'audience': 55,
          },
          {
            'playID': 'as-like',
            'audience': 35,
          },
          {
            'playID': 'othello',
            'audience': 40,
          },
        ],
      };

  const result = statement(invoice, plays);
  t.is(result, 'Statement for BigCo\n' +
      ' Hamlet: $650.00 (55 seats)\n' +
      ' As You Like It: $580.00 (35 seats)\n' +
      ' Othello: $500.00 (40 seats)\n' +
      'Amount owed is $1,730.00\n' +
      'You earned 47 credits \n');
});

test('when keanu has no performance',t=>{
    const invoice = {
        'customer': 'Keanu',
        'performances': [
        ],
      };
    const result=statement(invoice,plays);
    t.is(result,'Statement for Keanu\n' +
    'Amount owed is $0.00\n' +
    'You earned 0 credits \n');
      
})