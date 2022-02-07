const form = document.getElementById("addForm");
const itemList = document.getElementById("items");
const filter = document.getElementById("filter");

// Form Submit Event
form.addEventListener("submit", addItem);
// Delete event
itemList.addEventListener("click", removeItem);
// Filter event
filter.addEventListener("keyup", filterItems);

// Add Item
function addItem(e) {
  e.preventDefault();

  // get Input Value
  const newItem = document.getElementById("item");

  // create new li element
  const li = document.createElement("li");
  // add class name
  li.className = "list-group-item";
  //append text node with input value
  li.appendChild(document.createTextNode(newItem.value));

  //create delete button
  const deleteBtn = document.createElement("button");
  //add classes
  deleteBtn.className = "btn btn-danger btn-sm float-right delete";
  deleteBtn.appendChild(document.createTextNode("X"));
  // add delete button to li
  li.appendChild(deleteBtn);

  // append li to list
  itemList.appendChild(li);
}

// Remove Item
function removeItem(e) {
  // check that click was on delete button not list element
  if (e.target.classList.contains("delete")) {
    // prompt for confirmation
    if (confirm("Are you Sure?")) {
      // get parent of button which is list element
      const li = e.target.parentElement;
      // remove list element from itemList
      itemList.removeChild(li);
    }
  }
}

function filterItems(e) {
  // get input and convert to lower case
  const text = e.target.value.toLowerCase();
  // get List Items
  // course used getelementsbytagname, but can also do with queryselectorall
  // const items = itemList.querySelectorAll("li");
  // items.forEach((item) => console.log(item.firstChild.textContent));
  const items = itemList.getElementsByTagName("li");
  // convert to array
  Array.from(items).forEach((item) => {
    const itemName = item.firstChild.textContent;
    if (itemName.toLowerCase().indexOf(text) != -1) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}
