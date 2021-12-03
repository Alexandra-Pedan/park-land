const filter = document.querySelector('.js-filter');
// const filterForm = document.querySelector('.filter-form');

// document.querySelectorAll('[data-select]').forEach(filterItem => {
//   const key = filterItem.dataset.type;
//   // filterItem.addEventListener('change', () => {
//   //   filterItem.checked ? currentCategories.add(key) : currentCategories.delete(key);
//   //   filterByCategories();
//   // });
// });

function filterByCategories() {
  document.querySelectorAll('[data-type]').forEach((el) => {
    const key = el.dataset.type;
    el.style.display = currentCategories.has(key) || currentCategories.has('all') ? '' : 'none';
  });
}

const currentCategories = {};
const filterCards = document.querySelectorAll('[data-filter-item]');
const inputsForFilter = document.querySelectorAll('[data-type]');
const selects = document.querySelectorAll('[data-select]');

selects.forEach((select) => {
  currentCategories[select.dataset.type] = '';
  const inputsForFilter = select.querySelector('input');
  const currentSelectValue = select.querySelector('[class*="--selected"]');
  currentCategories[select.dataset.type] = currentSelectValue.dataset.value;
  select.querySelector('ul').addEventListener('click', (evt) => {
    if (evt.target.dataset.value === undefined) return;
    currentCategories[select.dataset.type] = evt.target.dataset.value;
    currentSelectValue.textContent = evt.target.textContent;
    filterItems(filterCards, currentCategories);
  });
});

function filterItems(items, filterConfig) {
  console.log(items, filterConfig);
  items.forEach((card) => {
    let validFlatsCount = 0;
    Object.entries(filterConfig).forEach((filterValue) => {
      const [key, value] = filterValue;
      if (value === 'null') {
        validFlatsCount += 1;
        return;
      }
      if (card.dataset[key] === value) {
        validFlatsCount += 1;
      }
    });

    card.style.display = validFlatsCount === Object.entries(filterConfig).length ? '' : 'none';
  });
}
