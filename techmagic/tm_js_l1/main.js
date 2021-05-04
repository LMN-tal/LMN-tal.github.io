const maxItemNumber = 36;
let itemCount = 0;

function addItem(item) {
  let li = document.createElement('li');
  let textNode = document.createTextNode(item);
  li.appendChild(textNode);
  li.className = 'queue_item';
  document.getElementById('queue').appendChild(li);
  itemCount++;
}

function readItemList() {
  itemList = JSON.parse(localStorage.getItem('itemList'));
  if (itemList !== null) {
    itemList.forEach((item) => addItem(item));
  }
}

function saveItemList() {
  let itemListCollection = document.getElementById('queue').getElementsByTagName('li');
  let itemList = Array.from(itemListCollection).map((item) => item.textContent);
  localStorage.setItem('itemList', JSON.stringify(itemList));
}

function inputItem() {
  let inputValue = document.getElementById('itemName').value;
  if (itemCount >= maxItemNumber) {
    alert(`You cannot add more than ${maxItemNumber} items`);
  } else if (inputValue === '') {
    alert('Item name cannot be empty');
  } else {
    addItem(inputValue);
    document.getElementById('itemName').value = '';
    saveItemList();
  }
}

function removeItem() {
  let firstItem = document.getElementById('queue').getElementsByTagName('li')[0];
  if (firstItem) {
    firstItem.remove();
    saveItemList();
    itemCount--;
  } else {
    alert('Cannot remove an element from the empty queue');
  }
}

readItemList();
