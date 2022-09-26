const allCountries = 'https://openexchangerates.org/api/currencies.json';
const API_KEY = '7615924fb348fb790fb9ffc9';
const currencyOne = document.getElementById('currency-one');
const currencyTwo = document.getElementById('currency-two');
const amountOne = document.getElementById('amount-one');
const amountTwo = document.getElementById('amount-two');
const rateEl = document.getElementById('rate');
const swap = document.getElementById('swap');

const calculate = function () {
  const currency_one = currencyOne.value;
  const currency_two = currencyTwo.value;

  fetch(`https://v6.exchangerate-api.com/v6/${API_KEY}/latest/${currency_one}`)
    .then((res) => res.json())
    .then((data) => {
      const rate = data.conversion_rates[currency_two];

      rateEl.innerText = `1 ${currency_one} = ${rate} ${currency_two}`;

      amountTwo.value = (amountOne.value * rate).toFixed(3);
    });
};

// Event Listeners
currencyOne.addEventListener('change', calculate);
currencyTwo.addEventListener('change', calculate);
amountOne.addEventListener('input', calculate);
amountTwo.addEventListener('input', calculate);

swap.addEventListener('click', () => {
  const temp = currencyOne.value;
  currencyOne.value = currencyTwo.value;
  currencyTwo.value = temp;
  calculate();
});

calculate();

/* 
// Fetch exchange rates and update the DOM
const calculate = function () {
  const currency_one = currencyOne.value;
  const currency_two = currencyTwo.value;

  const myHeaders = new Headers();
  myHeaders.append('apikey', API_KEY);

  const requestOptions = {
    method: 'GET',
    redirect: 'follow',
    headers: myHeaders,
  };

  fetch(
    `https://api.apilayer.com/exchangerates_data/convert?to=${currency_one}&from=${currency_two}&amount=${amountOne.value}`,
    requestOptions
  )
    .then((res) => res.text())
    .then((data) => console.log(data))
    .catch((err) => console.log('error', err));
};

// Event Listeners
currencyOne.addEventListener('change', calculate);
currencyTwo.addEventListener('change', calculate);
amountOne.addEventListener('input', calculate);
amountTwo.addEventListener('input', calculate);

calculate();

// async function showCountry() {
//   let response = await fetch(allCountries);
//   let data = await response.json();
//   return data;
// }

// showCountry()
//   .then((data) => console.log(data))
//   .catch((reason) => console.log(reason.message));

// const selectCountry = function () {
//   console.log('click');
// };

// document.addEventListener('click', selectCountry);
 */
