fetch('./data.json')
  .then(res => res.json())
  .then(data => {
    data.map(category => createSummary(category));
  });

const summaryCategoriesDiv = document.querySelector(
  '.result__summary__categories'
);

function createSummary(category) {
  const div = document.createElement('div');
  div.className = `flex-group result__summary__category result__summary__category--${category.color}`;
  div.innerHTML = `<div class="flex">
                    <img src="${category.icon}" />
                    <p class="summary__category">${category.category}</p>
                  </div>
                  <p class="summary__score"> ${category.score} <span class="summary__score-outof">/ 100</span></p>`;
  summaryCategoriesDiv.appendChild(div);
}
