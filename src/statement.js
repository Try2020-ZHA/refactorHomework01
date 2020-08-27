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
      throw new Error('unknown type: '+type);

  }
  return thisAmount;
}

function calculateVolumeCredits(type, audience) {
  if ('comedy' === type)
    return Math.max(audience - 30, 0) + Math.floor(audience / 5);
  return Math.max(audience - 30, 0);
}

function statement(invoice, plays) {
  let totalAmount = 0;
  let volumeCredits = 0;
  let result = `Statement for ${invoice.customer}\n`;

  for (let perf of invoice.performances) {
    const play = plays[perf.playID];
    const {name,type}=play;
    const {audience}=perf;
    let thisAmount = calculateThisAmount(type, audience);
    volumeCredits += calculateVolumeCredits(type, audience);
    result += ` ${name}: ${format(thisAmount / 100)} (${audience} seats)\n`;
    totalAmount += thisAmount;
  }
  result += `Amount owed is ${format(totalAmount / 100)}\n`;
  result += `You earned ${volumeCredits} credits \n`;
  return result;
}

module.exports = {
  statement,
};