// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>Shopping List</h1>
`;

const list = document.getElementById('list');
const button = document.getElementById('addButton');
const input = document.getElementById('input') as HTMLInputElement;
const search = document.getElementById('search') as HTMLInputElement;
const searchButton = document.getElementById(
  'searchButton'
) as HTMLInputElement;
const searchResult = document.getElementById('searchResult');
const clearItems = document.getElementById('clearButton');
class ShoppingList {
  groceries = [];

  addItem(item: string) {
    this.groceries = [...this.groceries, item];
    this.render();
  }

  removeItem(item: any) {
    this.groceries = this.groceries.filter((grocery) => grocery !== item);
    this.render();
  }

  clearItems() {
    this.groceries = [];
    this.render();
  }

  render() {
    list.innerHTML = '';
    this.groceries.forEach((item) => {
      const li = document.createElement('li');
      const removeButton = document.createElement('button');
      removeButton.innerText = 'Remove';
      li.innerHTML = item;
      removeButton.onclick = () => {
        this.removeItem(item);
      };
      li.appendChild(removeButton);
      list.appendChild(li);
    });
  }
}

const shoppingList = new ShoppingList();

button.onclick = () => {
  const inputValue = input.value;
  if (inputValue) shoppingList.addItem(inputValue);
  input.value = '';
};

searchButton.onclick = () => {
  searchResult.innerHTML = '';
  const searchValue = search.value;
  if (searchValue) {
    const result = shoppingList.groceries.filter(
      (item) => item === searchValue
    );
    for (const grocery of result) {
      const resultItem = document.createElement('li');
      resultItem.innerHTML = grocery;
      searchResult.appendChild(resultItem);
    }
  }
};

clearItems.onclick = () => {
  shoppingList.clearItems();
};
