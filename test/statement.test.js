const test = require('ava')
const {statement,statementHTML}= require('../src/statement')

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

test('when Keanu has as-like with 30 audience and hamlet with 40 audience',t=>{
    const invoice = {
        'customer': 'Keanu',
        'performances': [
            {
              'playID': 'as-like',
              'audience': 30,
            },
            {
              'playID': 'hamlet',
              'audience': 40,
            }
        ],
      };
    const result=statement(invoice,plays);
    t.is(result,'Statement for Keanu\n' +
    ' As You Like It: $540.00 (30 seats)\n' +
    ' Hamlet: $500.00 (40 seats)\n' +
    'Amount owed is $1,040.00\n' +
    'You earned 16 credits \n');
});

test('when Keanu has hamlet with 55 audience and as-like with 35 audience and othello with 40 audience',t=>{
    const invoice = {
        'customer': 'Keanu',
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
      t.is(result, 'Statement for Keanu\n' +
          ' Hamlet: $650.00 (55 seats)\n' +
          ' As You Like It: $580.00 (35 seats)\n' +
          ' Othello: $500.00 (40 seats)\n' +
          'Amount owed is $1,730.00\n' +
          'You earned 47 credits \n');
})

test('generate html',t=>{
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
    const result=statementHTML(invoice,plays);
    t.is(result, '<h1>Statement for BigCo</h1>\n' +
    '<table>\n' +
    '<tr><th>play</th><th>seats</th><th>cost</th></tr>' +
    ' <tr><td>Hamlet</td><td>55</td><td>$650.00</td></tr>\n' +
    ' <tr><td>As You Like It</td><td>35</td><td>$580.00</td></tr>\n' +
    ' <tr><td>Othello</td><td>40</td><td>$500.00</td></tr>\n' +
    '</table>\n' +
    '<p>Amount owed is <em>$1,730.00</em></p>\n' +
    '<p>You earned <em>47</em> credits</p>\n');

})

test('when Keanu has an unknown performances',t=>{
    const invoice = {
        'customer': 'Keanu',
        'performances': [
          {
            'playID': 'Bayern-Paris Saint Germain',
            'audience': 55,
          }
        ],
      };
      const result='';
      try{
        result= statement(invoice,plays);
      }catch(e){
          t.is(e.message,'Cannot destructure property \'type\' of \'play\' as it is undefined.')
      }
})