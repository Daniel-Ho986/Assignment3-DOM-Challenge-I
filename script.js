//1) Select the section with an id of container without using querySelector
var selectContainer = document.getElementById("container");

//2) Select the section with an id of container using querySelector
var selectContainer2 = document.querySelector("container");

//3) Select all of the list items with a class of "second"
var selectListSecond = document.getElementByClassName("second");

//4) Select a list item with a class of third, but only the list item inside the ol tag
var selectOlList = selectContainer.getElementByTagName("ol")[0]
var selectOlListThird = selectOlList.getElementByClassName("third");

//5) Give the selection with an id of container the text "Hello!"
var hello = selectContainer.innerHTML = <h1>Hello!</h1>;

//6) Add the class main to the div with a class of footer
var foot = document.getElementByClassName("footer");
var putMain = foot.classList.add("main");

//7) Remove the class main on the div with a class of footer
var removeMain = foot.classList.remove("main");

//8) Create a new li element
var newLi = document.createElement("li");

//9) Give the li the text "four"
newLi.innerHTML = "four";

//10) Append the li to the ul element
var appendLi = document.getElementbyId("ul").appendChild(newLi);

//12) Loop over all of the lis inside the ol tag and give them a background color of "green"
for (li of ol){
    li.style.color = "green";
}

//13) Remove the div with a class of footer
footer.remove();

