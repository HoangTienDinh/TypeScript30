/**
 * JavaScript30 by Wes Bos, https://javascript30.com/
 * TypeScript implementation by Will Wager
 * Project: LocalStorage
 * Concepts: Browser local storage, event delegation
 * Key takeaways: LocalStorage API, JSON.stringify and parse for arrays and objects,
 *   e.target to get the clicked child
 * Sidenotes: Tried a neomorphism design...
 * Compilation command:
 *   tsc --removeComments --strictNullChecks --noImplicitAny --target es5 typescripts.ts
 */

interface Item {
  text: string;
  done: boolean;
}

const addItems = document.querySelector('.add-items')! as HTMLFormElement;
const itemsList = document.querySelector('.plates')! as HTMLElement;
const items: Item[] = JSON.parse(localStorage.getItem('items')!) || [];

function populateList(plates: Item[] = [], platesList: HTMLElement) {
  platesList.innerHTML = plates.map((plate, i) => {
    return `
      <li>
        <input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? 'checked' : ''}/>
        <label for="item${i}">${plate.text}</label>
      </li>
    `;
  }).join('');
}

function addItem(e: Event) {
  e.preventDefault();
  const text = (this.querySelector('[name="item"]')).value;
  const item = {
    text,
    done: false,
  }

  items.push(item);
  populateList(items, itemsList);
  localStorage.setItem('items', JSON.stringify(items));
  this.reset();
}

addItems.addEventListener('submit', addItem);


function toggleDone(e: MouseEvent) {
  const el = e.target! as HTMLLIElement;
  if (el.matches('input')) {
    const index = Number(el.dataset.index!);
    items[index].done = !items[index].done;
    localStorage.setItem('items', JSON.stringify(items));
    populateList(items, itemsList);
  }
}

itemsList.addEventListener('click', toggleDone);


const clearBtn = document.querySelector('.clear')! as HTMLButtonElement;
const checkAllBtn = document.querySelector('.check')! as HTMLButtonElement;
const uncheckAllBtn = document.querySelector('.uncheck')! as HTMLButtonElement;

function clearItems() {
  items.length = 0;
  localStorage.setItem('items', JSON.stringify(items));
  populateList(items, itemsList);
}

function checkAllItems() {
  items.forEach(item => item.done = true);
  localStorage.setItem('items', JSON.stringify(items));
  populateList(items, itemsList);
}

function uncheckAllItems() {
  items.forEach(item => item.done = false);
  localStorage.setItem('items', JSON.stringify(items));
  populateList(items, itemsList);
}

clearBtn.addEventListener('click', clearItems);
checkAllBtn.addEventListener('click', checkAllItems);
uncheckAllBtn.addEventListener('click', uncheckAllItems);

// Init
populateList(items, itemsList);