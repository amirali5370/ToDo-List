// Global vars
var eElement;
const editBox = document.querySelector("#edit_wrp");
const input = document.querySelector("#addInp");
const editInp = editBox.children[1];

// Main codes
editBox.parentNode.style.border = "none";

// Events
input.addEventListener("keyup", function(e) {
    if (e.key == "Enter") {
        addObject()
    }
});
editInp.addEventListener("keyup", function(e) {
    if (e.key == "Enter") {
        editObject()
    };
});

// Methods
function addObject () {
    var entery = input.value;
    if (entery=="") {
        alert("متن یادداشت نمی تواند خالی باشد!");
    } else{ 
        const object = document.createElement("li");
        object.innerHTML = `<input type="checkbox" class="check" onchange="check(this)"><p class="text">${entery}</p><img src="./image/edit.svg" alt="edit" width="20" onclick="editShow(this)" title="ویرایش"><img src="./image/trash.svg" alt="trash" width="20" onclick="delObject(this)" title="حذف">`;
        document.querySelector("ul").appendChild(object);
        input.value = '';
        editBox.parentNode.style.border = "1px solid rgba(55, 55, 55, 0.729)";
    };
};
function check(e) {
    /* var check = e.firstElementChild.checked;
    if (check == true) {
        e.classList.add("done")
    }
    else if (check == false) {
        e.classList.remove("done")
    }; */
    e.parentNode.classList.toggle("done");
};
function delObject (e) {
    e.parentNode.remove();
    if (editBox.parentNode.children.length == 1) {
        editBox.parentNode.style.border = "none";
    };
};
function editShow(e) {
    editBox.style.display = "block";
    var text = e.parentNode.children[1].innerText;
    editInp.value = text;
    eElement = e.parentNode;
};
function editObject() {
    var text = editInp.value;
    if (text=="") {
        alert("متن یادداشت نمی تواند خالی باشد!")
    } else{
        eElement.children[1].innerText = text;
        editBox.style.display = "none";
    };
};