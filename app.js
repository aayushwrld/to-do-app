
var inputText = document.getElementById("input")

var subBtn = document.getElementById("button")
var todoListTag = document.getElementById("todolist")
var todoArr = JSON.parse(localStorage.getItem("todoArr")) || []
display()

var todoArr = []

subBtn.addEventListener("click", addItemToArray);

inputText.addEventListener('keypress', (event) => {
    if (event.key == "Enter") {
        addItemToArray()
    }
})


function addItemToArray() {
    if (inputText.value != "") {
        todoArr.push(inputText.value)

    }
    inputText.value = ""

    localStorage.setItem("todoArray", JSON.stringify(todoArr))
    display();
}

function display() {
    todoListTag.innerHTML = "";

    todoArr.map((curr, i) => {
        var listItem = `<li id="item${i}">
        <div>${curr}</div>
        <div>
          <span onclick="deleteItem(${i})">&times;</span>
          <span>|</span>
          <span onclick="editItem(${i})">Edit</span>
        </div>
      </li>`;

        // insert it inside <ul id="todolist"
        todoListTag.innerHTML += listItem
    })

}


function deleteItem(index) {
    todoArr.splice(index, 1)
    localStorage.setItem("todoArray", JSON.stringify(todoArr))
    display();
}


function editItem(index) {
    var newValue = prompt("Edit your Todo!")
    todoArr.splice(index, 1, newValue)
    localStorage.setItem("todoArray", JSON.stringify(todoArr))
    display()
}
document.getElementById("reset").addEventListener("click", () => {
    todoArr = []
    localStorage.setItem("todoArray", JSON.stringify(todoArr))
    display();
})

var CartArr = ["Book", "Pen", "Eraser"]
localStorage.setItem("Cart", JSON.stringify(CartArr))

CartArr.push("scale")
sessionStorage.setItem("cart", JSON.stringify(CartArr))
console.log("cartarr:", CartArr)

var tempArr = JSON.parse(localStorage.getItem("cart"))
console.log(tempArr)