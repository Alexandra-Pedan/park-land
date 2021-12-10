function renderCalculate(containers, state) {
  containers.inputTerm.value = state.term;
  containers.minPayment.value = state.firstInstallment;
  containers.total.textContent = state.total;
  containers.monthPayment.textContent = state.totalWithPercent / state.term;
}

function calculate(container, config) {
  const containers = {
    calculatorForm: container,
    inputTotal: container.querySelector('.js-current-total'),
    minPayment: container.querySelector('.js-min-payment'),
    paymentControl: container.querySelector('.js-min-payment-control'),
    termControl: container.querySelector('.js-term-control'),
    inputTerm: container.querySelector('.js-term'),
    monthPayment: container.querySelector('.js-month-payment'),
    total: container.querySelector('.js-total'),
  };

  const state = {
    total: 0,
    firstInstallment: 0,
    totalWithPercent: 0,
    term: 1,
  };

  function recalculateTotalWithPercent(values) {
    const balancePayment = (values.total - values.firstInstallment);
    return balancePayment + balancePayment / 100 * config.percent;
  }

  const paymentControlRange = $(containers.paymentControl);
  const totalControlRange = $(containers.termControl);

  paymentControlRange.ionRangeSlider({
    grid: false,
    min: config.firstInstallment,
    max: config.total,
    from: config.firstInstallment,
    onFinish: (values) => {
      state.firstInstallment = values.from;
      state.totalWithPercent = recalculateTotalWithPercent(state);
      renderCalculate(containers, state);
    },
  });
  totalControlRange.ionRangeSlider({
    grid: false,
    min: config.installmentPlan.min,
    max: config.installmentPlan.max,
    from: config.installmentPlan.min,
    onFinish: (values) => {
      state.term = values.from;
      state.totalWithPercent = recalculateTotalWithPercent(state);
      renderCalculate(containers, state);
    },
  });

  const instanceTotal = totalControlRange.data('ionRangeSlider');
  const instancePayment = paymentControlRange.data('ionRangeSlider');

  containers.inputTotal.addEventListener('input', (evt) => {
    const total = +evt.target.value ?? 0;
    state.total = total;
    state.firstInstallment = total / 100 * config.minTotalPercent;
    state.totalWithPercent = recalculateTotalWithPercent(state);
    renderCalculate(containers, state);
    instancePayment.update({
      min: state.firstInstallment,
      max: state.total,
      from: state.firstInstallment,
    });
  });

  containers.minPayment.addEventListener('input', (evt) => {
    state.firstInstallment = +evt.target.value;
    state.totalWithPercent = recalculateTotalWithPercent(state);
    renderCalculate(containers, state);
  });

  containers.inputTerm.addEventListener('input', (evt) => {
    state.term = +evt.target.value;
    state.totalWithPercent = recalculateTotalWithPercent(state);
    renderCalculate(containers, state);
    instanceTotal.update({
      from: state.term,
    });
  });

  renderCalculate(containers, state);

  containers.calculatorForm.addEventListener('submit', (e) => {
    e.preventDefault();
  });
}


document.addEventListener('DOMContentLoaded', () => {
  const calculateWrap = document.querySelector('#calculator-form');
  const config = {
    minTotalPercent: 50,
    percent: 0,
    installmentPlan: {
      min: 1,
      max: 5,
    },
  };
  calculate(calculateWrap, config);
});
