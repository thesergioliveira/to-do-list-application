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
    //applying color to text
    console.log(text);
    newLi.style.color = colorGen();
    document.querySelector(".result").appendChild(newLi);
    //emptying the text area
    document.querySelector("#userData").value = "";
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
