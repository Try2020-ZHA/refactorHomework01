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
});

test('when keanu has hamlet with 30 audience',t=>{
    const invoice = {
        'customer': 'Keanu',
        'performances': [
          {
            'playID': 'hamlet',
            'audience': 30,
          }
        ],
      };
    const result=statement(invoice,plays);
    t.is(result, 'Statement for Keanu\n' +
    ' Hamlet: $400.00 (30 seats)\n' +
    'Amount owed is $400.00\n' +
    'You earned 0 credits \n');
})