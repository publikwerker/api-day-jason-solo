/* global shoppingList, store */

$(document).ready(function() {
  shoppingList.bindEventListeners();
  shoppingList.render();
});

// store.items.push(Item.create('apples'));

api.getItems((items) => {
  items.forEach((item) => store.addItem(item));
  shoppingList.render();
});


// tests createItem
// api.createItem('pears', (newItem) => {
//   api.getItems((items) => {
//     console.log(items);
// })
// });