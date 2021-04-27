//Function to create new element and inject text on the go

const create = () => {
  //creating variable to receive new element and the text
  const newElement = document.createElement("div");
  const newText = document.createTextNode("I am new element :)");
  // inject the text into the div and then inject the div into the body of the html document
  //div                    //text
  newElement.appendChild(newText);
  document.body.appendChild(newElement);
};

const addToList = () => {
  let userData = document.querySelector("#userData").value;
  //   console.log(userData);
  if (userData != "") {
    //creating new li
    let newLi = document.createElement("li");
    //creating text
    let text = document.createTextNode(userData);
    //injecting text
    newLi.appendChild(text);
    //applying color to list item
    newLi.style.color = colorGen();
    //applying new random color to all list item whenever the function is activated
    const listItems = document.querySelectorAll("li");
    listItems.forEach((item) => {
      item.style.color = colorGen();
    });
    document.querySelector(".result").appendChild(newLi);
    //emptying the text area
    document.querySelector("#userData").value = "";

    //Creating the container and the buttons elements for the to-do-list app, on Js
    const newContainer = document.createElement("div");
    const doneButton = document.createElement("button");
    const deleteButton = document.createElement("button");
    //styling the buttons
    doneButton.innerHTML = "✔";
    deleteButton.innerHTML = "✗";
    //Appending the created elements into the container
    newContainer.appendChild(doneButton);
    newContainer.appendChild(deleteButton);
    //Appending the container into the newLi element which was already appended into the body
    newLi.appendChild(newContainer);

    const check = () => newLi.classList.toggle("completed");
    const del = () => newLi.remove();

    deleteButton.addEventListener("click", del);
    doneButton.addEventListener("click", check);
  } else {
    document.querySelector("#userData").placeholder =
      "Please, enter text first";
  }
};

const colorGen = () => {
  let result = "#";
  let colorCode = "0123456789ABCDEF";
  for (let i = 0; i < 6; i++) {
    result += colorCode[Math.floor(Math.random() * 16)];
  }

  return result;
};
