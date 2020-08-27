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
});

test('when Keanu has hamlet with 40 audience',t=>{
    const invoice = {
        'customer': 'Keanu',
        'performances': [
          {
            'playID': 'hamlet',
            'audience': 40,
          }
        ],
      };
    const result=statement(invoice,plays);
    t.is(result,'Statement for Keanu\n' +
    ' Hamlet: $500.00 (40 seats)\n' +
    'Amount owed is $500.00\n' +
    'You earned 10 credits \n');
});

test('when Keanu has othello with 20 audience',t=>{
    const invoice = {
        'customer': 'Keanu',
        'performances': [
          {
            'playID': 'othello',
            'audience': 20,
          }
        ],
      };
    const result=statement(invoice,plays);
    t.is(result,'Statement for Keanu\n' +
    ' Othello: $400.00 (20 seats)\n' +
    'Amount owed is $400.00\n' +
    'You earned 0 credits \n');
})

test('when Keanu has as-like with 20 audience',t=>{
    const invoice = {
        'customer': 'Keanu',
        'performances': [
          {
            'playID': 'as-like',
            'audience': 20,
          }
        ],
      };
    const result=statement(invoice,plays);
    t.is(result,'Statement for Keanu\n' +
    ' As You Like It: $360.00 (20 seats)\n' +
    'Amount owed is $360.00\n' +
    'You earned 4 credits \n');
})

test('when Keanu has as-like with 40 audience',t=>{
    const invoice = {
        'customer': 'Keanu',
        'performances': [
          {
            'playID': 'as-like',
            'audience': 40,
          }
        ],
      };
    const result=statement(invoice,plays);
    t.is(result,'Statement for Keanu\n' +
    ' As You Like It: $620.00 (40 seats)\n' +
    'Amount owed is $620.00\n' +
    'You earned 18 credits \n');
})

test('when Keanu has as-like with 10 audience',t=>{
    const invoice = {
        'customer': 'Keanu',
        'performances': [
          {
            'playID': 'as-like',
            'audience': 10,
          }
        ],
      };
    const result=statement(invoice,plays);
    t.is(result,'Statement for Keanu\n' +
    ' As You Like It: $330.00 (10 seats)\n' +
    'Amount owed is $330.00\n' +
    'You earned 2 credits \n');
})

test('when Keanu has as-like with 10 audience and hamlet with 20 audience',t=>{
    const invoice = {
        'customer': 'Keanu',
        'performances': [
            {
              'playID': 'as-like',
              'audience': 10,
            },
            {
              'playID': 'hamlet',
              'audience': 20,
            }
        ],
      };
    const result=statement(invoice,plays);
    t.is(result,'Statement for Keanu\n' +
    ' As You Like It: $330.00 (10 seats)\n' +
    ' Hamlet: $400.00 (20 seats)\n' +
    'Amount owed is $730.00\n' +
    'You earned 2 credits \n');
})

test('when Keanu has as-like with 10 audience and hamlet with 30 audience',t=>{
    const invoice = {
        'customer': 'Keanu',
        'performances': [
            {
              'playID': 'as-like',
              'audience': 10,
            },
            {
              'playID': 'hamlet',
              'audience': 30,
            }
        ],
      };
    const result=statement(invoice,plays);
    t.is(result,'Statement for Keanu\n' +
    ' As You Like It: $330.00 (10 seats)\n' +
    ' Hamlet: $400.00 (30 seats)\n' +
    'Amount owed is $730.00\n' +
    'You earned 2 credits \n');
})

test('when Keanu has as-like with 10 audience and hamlet with 40 audience',t=>{
    const invoice = {
        'customer': 'Keanu',
        'performances': [
            {
              'playID': 'as-like',
              'audience': 10,
            },
            {
              'playID': 'hamlet',
              'audience': 40,
            }
        ],
      };
    const result=statement(invoice,plays);
    t.is(result,'Statement for Keanu\n' +
    ' As You Like It: $330.00 (10 seats)\n' +
    ' Hamlet: $500.00 (40 seats)\n' +
    'Amount owed is $830.00\n' +
    'You earned 12 credits \n');
})

test('when Keanu has as-like with 20 audience and hamlet with 30 audience',t=>{
    const invoice = {
        'customer': 'Keanu',
        'performances': [
            {
              'playID': 'as-like',
              'audience': 20,
            },
            {
              'playID': 'hamlet',
              'audience': 30,
            }
        ],
      };
    const result=statement(invoice,plays);
    t.is(result,'Statement for Keanu\n' +
    ' As You Like It: $360.00 (20 seats)\n' +
    ' Hamlet: $400.00 (30 seats)\n' +
    'Amount owed is $760.00\n' +
    'You earned 4 credits \n');
})

test('when Keanu has as-like with 20 audience and hamlet with 40 audience',t=>{
    const invoice = {
        'customer': 'Keanu',
        'performances': [
            {
              'playID': 'as-like',
              'audience': 20,
            },
            {
              'playID': 'hamlet',
              'audience': 40,
            }
        ],
      };
    const result=statement(invoice,plays);
    t.is(result,'Statement for Keanu\n' +
    ' As You Like It: $360.00 (20 seats)\n' +
    ' Hamlet: $500.00 (40 seats)\n' +
    'Amount owed is $860.00\n' +
    'You earned 14 credits \n');
})