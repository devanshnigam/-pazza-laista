menu_list_array = ["Veg Margherita Pizza","Chicken tikka pizza","Green delight pizza","Mushroom cheesy pizza","Meaty supreme pizza"];
function getmenu(){
var htmldata;
var htmldata="ol class = 'menulist'";
menu_list_array.sort();
    for (var i = 0; i < menu_list_array.length ;i++) {
        htmldata=htmldata+'<li>' + menu_list_array[i]
    }
}

function add_item(){
var htmldata;
var item=document.getElementById("add_item").value;
menu_list_array.sort();
htmldata="<section='card'">
    for(var i=0;i<menu_list_array.length;i++){
        htmldata=htmldata+'<div class="card">'
        +'<img src="images/pizzaImg.png"/>'
        +menu_list_array[i] + '</div>'
        htmldata=htmldata+"</section>"
        document.getElementById("display_addedmenu")
    }
}
function add_top(){}