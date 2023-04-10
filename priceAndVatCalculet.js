const applePrice = '10';
const orangePrice = '20';
const vat = '.20';

const appleIntPrice = parseInt(applePrice);
const orangeIntPrice = parseInt(orangePrice);
const vatFolt = parseFloat(vat)



const  itemPrice = appleIntPrice + orangeIntPrice
const calciulateVat = itemPrice * vatFolt
const totalPrice = calciulateVat +itemPrice 

console.log(totalPrice);

