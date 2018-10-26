// Add button
var add = document.getElementById('add');

// Input for new items
var itemsList = document.getElementById('itemsList');

// Select ul
var ol = document.querySelector('ol');

// Clear all button
var clear = document.getElementById('clear');


// Check input fild for any ifo
function inputLength (){
  return itemsList.value.length;
}

// Create new li element and delete button in the list
function createListElement (){
  var li = document.createElement('li');
  li.appendChild(document.createTextNode(itemsList.value.charAt(0).toUpperCase() + itemsList.value.slice(1)));
  li.addEventListener('click', toggleDone);
  ol.appendChild(li);
  itemsList.value = "";

  var delButton = document.createElement('button');
  delButton.appendChild(document.createTextNode('Delete'));
  delButton.addEventListener('click', deleteItemByButton);
  li.appendChild(delButton);
}

// Mark items as done
function toggleDone() {
  this.classList.toggle('done');
}

// Delete item from list
function deleteItemByButton (){
  this.parentNode.parentNode.removeChild(this.parentNode)
}

// Add new item by click the "Add button"
add.addEventListener('click', function(){
if (inputLength() > 0) {
    createListElement();
  } else {
    alert('Add item');
  }
});

// Add new item by press the "Enter key"
itemsList.addEventListener('keypress', function(event){
  if(inputLength() && event.keyCode === 13){
    createListElement();
  }
});

// Clear item list
clear.addEventListener('click', function(){
  if (ol.firstChild) {while (ol.firstChild) {
    ol.removeChild(ol.firstChild);
} } else { alert('list is empty')}
});

// clear.addEventListener('click', function(){
//   var liLength = document.getElementsByTagName('li').length
//     if (liLength > 0) {
//       var li = document.querySelector('li');
//       // Delete items one by one
//       // ul.removeChild(li);
//
//       // Delete all items from list
//       ol.remove(li);
//     } else {
//         alert('List is empty!')
//     }
// });
