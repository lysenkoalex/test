const tabsList = document.querySelectorAll('[role="tablist"] li');

tabsList.forEach(function(item, index) {
  item.addEventListener('click', function(event){
    const elemnentId = this.dataset.target || {};
    const targetElement =  document.querySelector("#" + elemnentId);

    document.querySelectorAll('.tab-content').forEach(function(itemContent){
      itemContent.classList.remove("show");
    });
    tabsList.forEach(function(itemTab){
      itemTab.classList.remove("tabs__item--active");
    });

    targetElement.classList.add("show");
    this.classList.add("tabs__item--active");
  })
});