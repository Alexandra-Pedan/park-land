const calculatorForm = document.getElementById('calculator-form');
const inputTotal = document.getElementById('current-total');
const minPayment = document.getElementById('min-payment');
const paymentControl = document.getElementById('min-payment-control');
const termControl = document.getElementById('term-control');
const term = document.getElementById('term');

const props = {
  total: 0,
  minTotal: 0,
  term: 1,
};

term.value = props.term;

inputTotal.addEventListener('input', (evt) => {
  props.total = +evt.target.value;
  props.minTotal = +evt.target.value / 2;
  minPayment.value = +evt.target.value / 2;
  recalculateValues(props);
});
minPayment.addEventListener('input', (evt) => {
  props.minTotal = +evt.target.value;
  recalculateValues(props);
});
term.addEventListener('input', (evt) => {
  props.term = +evt.target.value;
  recalculateValues(props);
});

// function recalculateValues(values) {
//   const monthPayment = document.getElementById('month-payment');
//   const total = document.getElementById('total');
//   total.textContent = values.total - values.minTotal;
//   monthPayment.textContent = (values.total - values.minTotal) / values.term;
// }
function recalculateValues(values) {
  const monthPayment = document.getElementById('month-payment');
  const total = document.getElementById('total');
  total.textContent = values.total;
  monthPayment.textContent = (values.total - values.minTotal) / values.term;
}
calculatorForm.addEventListener('submit', (e) => {
  e.preventDefault();
});
