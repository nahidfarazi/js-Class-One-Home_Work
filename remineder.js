const a = '20.333'
const b = '30.121'

const aFloat = parseFloat(a);
const bFloat = parseFloat(b);

const result = aFloat % bFloat;
const towDecimel =result.toFixed(2)
const towDecimelFloat = parseFloat(towDecimel)

console.log(towDecimelFloat);





const x = 20;

console.log(x % 5);