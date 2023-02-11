let shoppingListItems = ["milk", "eggs", "bread", "apples", "bananas"];

function updateItems() {
    let listElement = document.getElementById("shopping-list-items");
    listElement.innerHTML = "";
    shoppingListItems.forEach((item) => {
        console.log(item)
        let itemElement = document.createElement("li");
        itemElement.innerText = item;
        listElement.appendChild(itemElement);
    });
}

updateItems();

function addItem() {
    let item = document.getElementById("new-item-text").value;
    shoppingListItems.push(item);
    // console.log(shoppingListItems);
    updateItems();
}

function clearList() {
    shoppingListItems = [];
    updateItems();
}
