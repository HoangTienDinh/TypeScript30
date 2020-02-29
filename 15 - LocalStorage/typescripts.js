var addItems = document.querySelector('.add-items');
var itemsList = document.querySelector('.plates');
var items = JSON.parse(localStorage.getItem('items')) || [];
function populateList(plates, platesList) {
    if (plates === void 0) { plates = []; }
    platesList.innerHTML = plates.map(function (plate, i) {
        return "\n      <li>\n        <input type=\"checkbox\" data-index=" + i + " id=\"item" + i + "\" " + (plate.done ? 'checked' : '') + "/>\n        <label for=\"item" + i + "\">" + plate.text + "</label>\n      </li>\n    ";
    }).join('');
}
function addItem(e) {
    e.preventDefault();
    var text = (this.querySelector('[name="item"]')).value;
    var item = {
        text: text,
        done: false,
    };
    items.push(item);
    populateList(items, itemsList);
    localStorage.setItem('items', JSON.stringify(items));
    this.reset();
}
addItems.addEventListener('submit', addItem);
function toggleDone(e) {
    var el = e.target;
    if (el.matches('input')) {
        var index = Number(el.dataset.index);
        items[index].done = !items[index].done;
        localStorage.setItem('items', JSON.stringify(items));
        populateList(items, itemsList);
    }
}
itemsList.addEventListener('click', toggleDone);
var clearBtn = document.querySelector('.clear');
var checkAllBtn = document.querySelector('.check');
var uncheckAllBtn = document.querySelector('.uncheck');
function clearItems() {
    items.length = 0;
    localStorage.setItem('items', JSON.stringify(items));
    populateList(items, itemsList);
}
function checkAllItems() {
    items.forEach(function (item) { return item.done = true; });
    localStorage.setItem('items', JSON.stringify(items));
    populateList(items, itemsList);
}
function uncheckAllItems() {
    items.forEach(function (item) { return item.done = false; });
    localStorage.setItem('items', JSON.stringify(items));
    populateList(items, itemsList);
}
clearBtn.addEventListener('click', clearItems);
checkAllBtn.addEventListener('click', checkAllItems);
uncheckAllBtn.addEventListener('click', uncheckAllItems);
populateList(items, itemsList);
