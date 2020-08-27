const format = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2,
}).format;

function calculateThisAmount(type, audience) {
  let thisAmount = 0;
  switch (type) {
    case 'tragedy':
      thisAmount = 40000;
      if (audience > 30) {
        thisAmount += 1000 * (audience - 30);
      }
      break;
    case 'comedy':
      thisAmount = 30000;
      if (audience > 20) {
        thisAmount += 10000 + 500 * (audience - 20);
      }
      thisAmount += 300 * audience;
      break;
    default:
      throw new Error('Cannot destructure property \'name\' of \'play\' as it is undefined.');

  }
  return thisAmount;
}

function calculateVolumeCredits(type, audience) {
  if ('comedy' === type)
    return Math.max(audience - 30, 0) + Math.floor(audience / 5);
  return Math.max(audience - 30, 0);
}

function calculateTotalAmount(invoice, plays) {
  let totalAmount = 0;
  for (let perf of invoice.performances) {
    const play = plays[perf.playID];
    const {
      type
    } = play;
    const {
      audience
    } = perf;
    totalAmount += calculateThisAmount(type, audience);
  }
  return totalAmount;
}

function calculateTotalCredit(invoice, plays) {
  let volumeCredits = 0;
  for (let perf of invoice.performances) {
    const play = plays[perf.playID];
    const {
      name,
      type
    } = play;
    const {
      audience
    } = perf;
    volumeCredits += calculateVolumeCredits(type, audience);
  }
  return volumeCredits;
}

function generateText(invoice, plays) {
  let result = `Statement for ${invoice.customer}\n`;
  for (let perf of invoice.performances) {
    const play = plays[perf.playID];
    const {
      name,
      type
    } = play;
    const {
      audience
    } = perf;
    result += ` ${name}: ${format(calculateThisAmount(type, audience) / 100)} (${audience} seats)\n`;
  }
  result += `Amount owed is ${format(calculateTotalAmount(invoice,plays) / 100)}\n`;
  result += `You earned ${calculateTotalCredit(invoice,plays)} credits \n`;
  return result;
}

function generateHTML(invoice, plays) {
  let result = `<h1>Statement for ${invoice.customer}</h1>\n`;
  result += '<table>\n';
  result += '<tr><th>play</th><th>seats</th><th>cost</th></tr>';
  for (let perf of invoice.performances) {
    result += ` <tr><td>${plays[perf.playID].name}</td><td>${perf.audience}</td><td>${format(calculateThisAmount(plays[perf.playID].type, perf.audience) / 100)}</td></tr>\n`;
  }
  result += '</table>\n';
  result += `<p>Amount owed is <em>${format(calculateTotalAmount(invoice,plays) / 100)}</em></p>\n`;
  result += `<p>You earned <em>${calculateTotalCredit(invoice,plays)}</em> credits</p>\n`;
  return result;
}

function statement(invoice, plays) {
  return generateText(invoice, plays);
}

function statementHTML(invoice, plays) {
  return generateHTML(invoice, plays);
}

module.exports = {
  statement,
  statementHTML
};